import React, { useReducer } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";


// =====================================================
// CÂU 1: useReducer - Counter
// =====================================================

// Reducer
function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };

    case "DECREMENT":
      return {
        count: state.count - 1,
      };

    case "RESET":
      return {
        count: 0,
      };

    default:
      return state;
  }
}


// Counter Component
function Counter() {
  const [state, dispatch] = useReducer(
    counterReducer,
    {
      count: 0,
    }
  );

  return (
    <Card className="shadow-sm mb-5">
      <Card.Body className="text-center p-4">

        <h2 className="mb-4">
          1. Counter using useReducer
        </h2>

        <div className="counter-number">
          {state.count}
        </div>

        <div className="d-flex justify-content-center gap-2 mt-4">

          <Button
            variant="success"
            onClick={() =>
              dispatch({
                type: "INCREMENT",
              })
            }
          >
            +
          </Button>

          <Button
            variant="danger"
            onClick={() =>
              dispatch({
                type: "DECREMENT",
              })
            }
          >
            -
          </Button>

          <Button
            variant="secondary"
            onClick={() =>
              dispatch({
                type: "RESET",
              })
            }
          >
            Reset
          </Button>

        </div>

      </Card.Body>
    </Card>
  );
}


// =====================================================
// CÂU 2: QUESTION BANK
// =====================================================

const initialState = {
  questions: [
    {
      id: 1,

      question:
        "What is the capital of Australia?",

      options: [
        "Sydney",
        "Canberra",
        "Melbourne",
        "Perth",
      ],

      answer: "Canberra",
    },

    {
      id: 2,

      question:
        "Which planet is known as the Red Planet?",

      options: [
        "Venus",
        "Mars",
        "Jupiter",
        "Saturn",
      ],

      answer: "Mars",
    },

    {
      id: 3,

      question:
        "What is the largest ocean on Earth?",

      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],

      answer: "Pacific Ocean",
    },

    {
      id: 4,

      question:
        "How many continents are there?",

      options: [
        "5",
        "6",
        "7",
        "8",
      ],

      answer: "7",
    },

    {
      id: 5,

      question:
        "Which language is primarily used to create web pages?",

      options: [
        "HTML",
        "Java",
        "Python",
        "C++",
      ],

      answer: "HTML",
    },
  ],

  currentQuestion: 0,

  selectedOption: "",

  score: 0,

  showScore: false,
};


// =====================================================
// QUIZ REDUCER
// =====================================================

function quizReducer(state, action) {

  switch (action.type) {

    // Người dùng chọn đáp án
    case "SELECT_OPTION":

      return {
        ...state,
        selectedOption: action.payload,
      };


    // Sang câu hỏi tiếp theo
    case "NEXT_QUESTION": {

      const currentQuestion =
        state.questions[state.currentQuestion];

      // Kiểm tra đáp án
      const isCorrect =
        state.selectedOption ===
        currentQuestion.answer;

      const newScore = isCorrect
        ? state.score + 1
        : state.score;


      // Nếu là câu cuối
      if (
        state.currentQuestion ===
        state.questions.length - 1
      ) {

        return {
          ...state,
          score: newScore,
          showScore: true,
        };
      }


      // Sang câu tiếp theo
      return {
        ...state,

        currentQuestion:
          state.currentQuestion + 1,

        selectedOption: "",

        score: newScore,
      };
    }


    // Restart quiz
    case "RESTART_QUIZ":

      return {
        ...state,
        currentQuestion: 0,
        selectedOption: "",
        score: 0,
        showScore: false,
      };


    default:
      return state;
  }
}


// =====================================================
// QUESTION BANK COMPONENT
// =====================================================

function QuestionBank() {

  const [state, dispatch] = useReducer(
    quizReducer,
    initialState
  );


  // Lấy câu hỏi hiện tại
  const currentQuestion =
    state.questions[state.currentQuestion];


  // Nếu hoàn thành quiz
  if (state.showScore) {

    return (
      <Card className="shadow-sm">

        <Card.Body className="text-center p-5">

          <h2 className="mb-4">
            Quiz Completed!
          </h2>

          <div className="score">
            Your Score:{" "}
            <span>
              {state.score}
            </span>
            /
            {state.questions.length}
          </div>

          <p className="text-muted mt-3">
            {state.score ===
            state.questions.length
              ? "Excellent! 🎉"
              : "Good job! Try again!"}
          </p>

          <Button
            variant="primary"
            size="lg"
            onClick={() =>
              dispatch({
                type: "RESTART_QUIZ",
              })
            }
          >
            Restart Quiz
          </Button>

        </Card.Body>

      </Card>
    );
  }


  return (
    <Card className="shadow-sm">

      <Card.Body className="p-4">

        {/* Header */}

        <div className="d-flex justify-content-between align-items-center mb-4">

          <h2>
            Question{" "}
            {state.currentQuestion + 1}
          </h2>

          <Badge bg="primary">
            {state.currentQuestion + 1}
            {" / "}
            {state.questions.length}
          </Badge>

        </div>


        {/* Question */}

        <h4 className="mb-4">
          {currentQuestion.question}
        </h4>


        {/* Options */}

        <div className="d-grid gap-2">

          {currentQuestion.options.map(
            (option) => (

              <Button
                key={option}
                variant={
                  state.selectedOption === option
                    ? "primary"
                    : "outline-secondary"
                }
                size="lg"
                onClick={() =>
                  dispatch({
                    type: "SELECT_OPTION",
                    payload: option,
                  })
                }
              >
                {option}
              </Button>

            )
          )}

        </div>


        {/* Next */}

        <div className="text-center mt-4">

          <Button
            variant="success"
            disabled={
              state.selectedOption === ""
            }
            onClick={() =>
              dispatch({
                type: "NEXT_QUESTION",
              })
            }
          >
            {state.currentQuestion ===
            state.questions.length - 1
              ? "Finish"
              : "Next"}
          </Button>

        </div>

      </Card.Body>

    </Card>
  );
}


// =====================================================
// APP
// =====================================================

function App() {

  return (
    <Container
      className="py-5"
      style={{
        maxWidth: "900px",
      }}
    >

      {/* Title */}

      <div className="text-center mb-5">

        <h1 className="fw-bold">
          useReducer Exercises
        </h1>

        <p className="text-muted">
          Counter and Question Bank
        </p>

      </div>


      <Row>

        <Col xs={12}>

          {/* CÂU 1 */}

          <Counter />


          {/* CÂU 2 */}

          <QuestionBank />

        </Col>

      </Row>

    </Container>
  );
}


export default App;