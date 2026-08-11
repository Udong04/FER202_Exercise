function Ex5() {
  const randomNumber = () => {
    return new Promise((resolve, reject) => {
      const number = Math.floor(Math.random() * 10) + 1;

      if (number > 5) {
        resolve(number);
      } else {
        reject("Error");
      }
    });
  };

  const handleClick = () => {
    randomNumber()
      .then((result) => {
        alert(result);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Promise Example</h2>

      <button onClick={handleClick}>
        Generate Random Number
      </button>
    </div>
  );
}

export default Ex5;