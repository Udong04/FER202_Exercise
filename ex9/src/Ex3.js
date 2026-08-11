import { useState } from "react";

function Exercise3() {
  const [count, setCount] = useState(0);

  return (
    <section className="exercise">

      <div className="counter">
        <h3>Counter</h3>

        <div className="count">
          {count}
        </div>

        <div className="counter-buttons">
          <button onClick={() => setCount(count - 1)}>
            -
          </button>

          <button onClick={() => setCount(0)}>
            Reset
          </button>

          <button onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
      </div>
    </section>
  );
}
export default Exercise3;