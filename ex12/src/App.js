import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  ListGroup,
  Badge,
} from "react-bootstrap";


// ===============================
// 1. COUNTER
// ===============================
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Card className="exercise-card">
      <Card.Body className="text-center">
        <Button
          variant="light"
          size="lg"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </Button>

        <h2 className="mt-4">
          Count: {count}
        </h2>
      </Card.Body>
    </Card>
  );
}


// ===============================
// 2. CONTROLLED INPUT
// ===============================
function ControlledInput() {
  const [text, setText] = useState("");

  return (
    <Card className="exercise-card">
      <Card.Body className="text-center">
        <Form.Control
          type="text"
          placeholder="Enter text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="input-box"
        />

        <h2 className="mt-4">
          Input text: {text}
        </h2>
      </Card.Body>
    </Card>
  );
}


// ===============================
// 3. TOGGLE VISIBILITY
// ===============================
function ToggleVisibility() {
  const [visible, setVisible] = useState(false);

  return (
    <Card className="exercise-card">
      <Card.Body className="text-center">
        <Button
          variant="light"
          size="lg"
          onClick={() => setVisible(!visible)}
        >
          {visible ? "Hide" : "Show"}
        </Button>

        {visible && (
          <h2 className="mt-4">
            Toggle me!
          </h2>
        )}
      </Card.Body>
    </Card>
  );
}


// ===============================
// 4. TODO LIST
// ===============================
function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    "Học lập trình .NET",
    "Học lập trình Java",
  ]);

  const addTodo = () => {
    if (todo.trim() === "") return;

    setTodos([...todos, todo]);
    setTodo("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Card className="exercise-card">
      <Card.Body>
        <Row className="align-items-center">
          <Col md={7}>
            <Form.Control
              type="text"
              placeholder="Please input a Task"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addTodo();
                }
              }}
            />
          </Col>

          <Col md={5} className="mt-2 mt-md-0">
            <Button
              variant="danger"
              onClick={addTodo}
              className="w-100"
            >
              Add Todo
            </Button>
          </Col>
        </Row>

        <Card className="todo-box mt-4">
          <Card.Body>
            <h5 className="text-center fw-bold">
              Todo List
            </h5>

            {todos.map((item, index) => (
              <ListGroup.Item
                key={index}
                className="d-flex justify-content-between align-items-center mb-2"
              >
                <span>{item}</span>

                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deleteTodo(index)}
                >
                  Delete
                </Button>
              </ListGroup.Item>
            ))}
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  );
}


// ===============================
// 5. COLOR SWITCHER
// ===============================
function ColorSwitcher() {
  const [color, setColor] = useState("");

  return (
    <Card className="exercise-card">
      <Card.Body>
        <Row>
          <Col md={6}>
            <Form.Select
              value={color}
              onChange={(e) => setColor(e.target.value)}
            >
              <option value="">Select a color</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
            </Form.Select>
          </Col>

          <Col md={6}>
            <div
              className="color-box"
              style={{
                backgroundColor: color || "#ffffff",
              }}
            >
              {color && (
                <h4 className="text-center text-dark">
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </h4>
              )}
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}


// ===============================
// 6. SEARCH FILTER
// ===============================
function SearchFilter() {
  const [search, setSearch] = useState("");

  const items = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Strawberry",
    "Watermelon",
    "Pineapple",
    "Grapes",
  ];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Card className="exercise-card">
      <Card.Body>
        <Form.Control
          type="text"
          placeholder="Search item..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <ListGroup className="mt-3">
          {filteredItems.map((item, index) => (
            <ListGroup.Item key={index}>
              {item}
            </ListGroup.Item>
          ))}
        </ListGroup>

        {filteredItems.length === 0 && (
          <div className="text-center mt-3">
            <Badge bg="danger">
              No items found
            </Badge>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}


// ===============================
// 7. DRAG AND DROP LIST
// ===============================
function DragDropList() {
  const [items, setItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);

  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggingItem(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (dropIndex) => {
    if (draggingItem === null) return;

    const newItems = [...items];

    const draggedItem = newItems[draggingItem];

    newItems.splice(draggingItem, 1);
    newItems.splice(dropIndex, 0, draggedItem);

    setItems(newItems);
    setDraggingItem(null);
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  return (
    <Card className="exercise-card">
      <Card.Body>
        <ListGroup>
          {items.map((item, index) => (
            <ListGroup.Item
              key={item}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(index)}
              onDragEnd={handleDragEnd}
              className={
                draggingItem === index
                  ? "dragging-item"
                  : "drag-item"
              }
            >
              <span>☷</span>
              <span>{item}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}


// ===============================
// APP
// ===============================
function App() {
  return (
    <div className="app">
      <Container className="py-5">

        <h1 className="text-center mb-5">
          React State Exercises
        </h1>

        {/* 1 */}
        <section className="mb-5">
          <h2>1. Counter</h2>
          <p>
            Click the button to increment the number by 1.
          </p>

          <Counter />
        </section>


        {/* 2 */}
        <section className="mb-5">
          <h2>2. Controlled Input Field</h2>
          <p>
            Type something in the input and see the text update
            in real-time.
          </p>

          <ControlledInput />
        </section>


        {/* 3 */}
        <section className="mb-5">
          <h2>3. Toggle Visibility</h2>
          <p>
            Click the button to show or hide the text.
          </p>

          <ToggleVisibility />
        </section>


        {/* 4 */}
        <section className="mb-5">
          <h2>4. Todo List</h2>
          <p>
            Add new todo items and delete them.
          </p>

          <TodoList />
        </section>


        {/* 5 */}
        <section className="mb-5">
          <h2>5. Color Switcher</h2>
          <p>
            Select a color to change the background.
          </p>

          <ColorSwitcher />
        </section>


        {/* 6 */}
        <section className="mb-5">
          <h2>6. Search Filter</h2>
          <p>
            Search and filter items from the list.
          </p>

          <SearchFilter />
        </section>


        {/* 7 */}
        <section className="mb-5">
          <h2>7. Drag and Drop List</h2>
          <p>
            Drag and drop items to reorder the list.
          </p>

          <DragDropList />
        </section>

      </Container>
    </div>
  );
}

export default App;