

function Exercise2() {
  return (
    <div>
      <style>
        {`
          .logo {
            width: 160px;
            height: 130px;
            object-fit: contain;
            margin: 0 15px;
          }
        `}
      </style>

      <div className="container mt-5">

        {/* Header */}
        <div className="bg-light p-5 text-center">
          <h2>My First Bootstrap Page</h2>
        </div>

        {/* Images */}
        <div className="text-center mt-4">

          <img
            src="/html5.png"
            alt="HTML5"
            className="logo"
          />

          <img
            src="/css3.png"
            alt="CSS3"
            className="logo"
          />

          <img
            src="/bootstrap.png"
            alt="Bootstrap"
            className="logo"
          />

        </div>

      </div>
    </div>
  );
}

export default Exercise2;