import { useState } from "react";

function TodoList() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (input.trim() === "") return;

    setItems([...items, input]);
    setInput("");
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40px",
        fontFamily: "Arial",
      }}
    >
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            width: "400px",
            height: "35px",
            fontSize: "20px",
          }}
        />

        <button
          onClick={addItem}
          style={{
            height: "41px",
            fontSize: "18px",
          }}
        >
          Add List
        </button>
      </div>

      <h1>List of Items</h1>

      {items.map((item, index) => (
        <div
          key={index}
          style={{
            fontSize: "25px",
            margin: "10px",
          }}
        >
          {item}

          <button
            onClick={() => deleteItem(index)}
            style={{
              marginLeft: "15px",
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;