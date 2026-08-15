import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";

import "./App.css";


// =====================================================
// 1. USER POSTS
// =====================================================
function UserPosts({ userId }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json();

        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <Card className="exercise-card">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h4 className="mb-1">User Posts</h4>
            <small className="text-secondary">
              Posts for User ID: {userId}
            </small>
          </div>

          <span className="user-badge">
            User {userId}
          </span>
        </div>

        {loading && (
          <div className="text-center py-4">
            <Spinner animation="border" />
            <p className="mt-2">Loading posts...</p>
          </div>
        )}

        {error && (
          <Alert variant="danger">
            {error}
          </Alert>
        )}

        {!loading && !error && (
          <Row>
            {posts.map((post) => (
              <Col md={6} key={post.id} className="mb-3">
                <Card className="post-card h-100">
                  <Card.Body>
                    <div className="post-number">
                      #{post.id}
                    </div>

                    <Card.Title>
                      {post.title}
                    </Card.Title>

                    <Card.Text>
                      {post.body}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Card.Body>
    </Card>
  );
}


// =====================================================
// 2. COUNTDOWN TIMER
// =====================================================
function CountdownTimer({ initialValue }) {
  const [timeRemaining, setTimeRemaining] =
    useState(initialValue);

  useEffect(() => {
    if (timeRemaining <= 0) {
      return;
    }

    const timerId = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [timeRemaining]);

  return (
    <Card className="exercise-card countdown-card">
      <Card.Body className="text-center">
        <div className="timer-circle">
          <span>{timeRemaining}</span>
        </div>

        <h4 className="mt-4">
          Time Remaining: {timeRemaining}
        </h4>

        {timeRemaining === 0 && (
          <p className="text-success fw-bold mt-3">
            Time's up!
          </p>
        )}
      </Card.Body>
    </Card>
  );
}


// =====================================================
// 3. WINDOW RESIZE LISTENER
// =====================================================
function WindowResize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Card className="exercise-card">
      <Card.Body className="text-center">
        <div className="resize-icon">
          ↔
        </div>

        <h4 className="mt-3">
          Window Size
        </h4>

        <div className="size-display">
          <div>
            <span>Width</span>
            <strong>{windowSize.width}px</strong>
          </div>

          <div>
            <span>Height</span>
            <strong>{windowSize.height}px</strong>
          </div>
        </div>

        <p className="text-secondary mt-3 mb-0">
          Resize your browser window to see the changes.
        </p>
      </Card.Body>
    </Card>
  );
}


// =====================================================
// 4. FORM INPUT VALIDATION
// =====================================================
function ValidatedInput() {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // Validation function
  const validationFunction = (inputValue) => {
    if (inputValue.trim() === "") {
      return {
        valid: false,
        message: "Input cannot be empty.",
      };
    }

    if (inputValue.length < 5) {
      return {
        valid: false,
        message: "Input must be at least 5 characters.",
      };
    }

    return {
      valid: true,
      message: "",
    };
  };

  useEffect(() => {
    const result = validationFunction(value);

    setIsValid(result.valid);
    setErrorMessage(result.message);
  }, [value]);

  return (
    <Card className="exercise-card">
      <Card.Body>
        <h4 className="mb-3">
          Form Input Validation
        </h4>

        <Form.Group>
          <Form.Label>
            Enter something
          </Form.Label>

          <Form.Control
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={!isValid ? "input-error" : ""}
            placeholder="Enter at least 5 characters..."
          />

          {!isValid && (
            <div className="error-message">
              {errorMessage}
            </div>
          )}

          {isValid && value !== "" && (
            <div className="success-message">
              ✓ Input is valid
            </div>
          )}
        </Form.Group>
      </Card.Body>
    </Card>
  );
}


// =====================================================
// APP
// =====================================================
function App() {
  const [userId, setUserId] = useState(1);

  return (
    <div className="app">
      <Container className="py-5">

        <h1 className="main-title">
          React useEffect Exercises
        </h1>

        <p className="subtitle">
          React Bootstrap implementation
        </p>


        {/* =================================================
            QUESTION 1
        ================================================= */}
        <section className="exercise-section">
          <h2>1. User Posts</h2>

          <p className="description">
            Fetch and display posts for a given user ID
            using the JSONPlaceholder API.
          </p>

          <Card className="control-card mb-3">
            <Card.Body>
              <Row className="align-items-center">
                <Col md={4}>
                  <Form.Label>
                    Select User ID
                  </Form.Label>

                  <Form.Select
                    value={userId}
                    onChange={(e) =>
                      setUserId(Number(e.target.value))
                    }
                  >
                    <option value={1}>User 1</option>
                    <option value={2}>User 2</option>
                    <option value={3}>User 3</option>
                    <option value={4}>User 4</option>
                    <option value={5}>User 5</option>
                  </Form.Select>
                </Col>

                <Col md={8}>
                  <p className="mb-0 mt-3 mt-md-0">
                    Change the User ID to refetch posts.
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <UserPosts userId={userId} />
        </section>


        {/* =================================================
            QUESTION 2
        ================================================= */}
        <section className="exercise-section">
          <h2>2. Countdown Timer</h2>

          <p className="description">
            Countdown from a given initial value and stop
            when it reaches 0.
          </p>

          <CountdownTimer initialValue={10} />
        </section>


        {/* =================================================
            QUESTION 3
        ================================================= */}
        <section className="exercise-section">
          <h2>3. Window Resize Listener</h2>

          <p className="description">
            Listen to the window resize event and display
            the current window size.
          </p>

          <WindowResize />
        </section>


        {/* =================================================
            QUESTION 4
        ================================================= */}
        <section className="exercise-section">
          <h2>4. Form Input Validation</h2>

          <p className="description">
            Validate user input whenever the input value
            changes.
          </p>

          <ValidatedInput />
        </section>

      </Container>
    </div>
  );
}

export default App;