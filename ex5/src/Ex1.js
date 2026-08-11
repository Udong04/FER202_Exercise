

function Exercise1() {
  return (
    <div>
      <style>
        {`
          .grid-box {
            background-color: #d3d3d3;
            border: 1px solid #999;
            height: 43px;
            padding: 8px;
            font-size: 12px;
          }

          .footer {
            background-color: #d8caca;
            text-align: center;
            font-size: 25px;
            font-weight: bold;
            margin-top: 17px;
            padding: 2px;
          }
        `}
      </style>

      <div className="container mt-5">

        {/* Header */}
        <div className="p-5 bg-light mb-3">
          <h2>Let's test the grid!</h2>
        </div>

        {/* Row 1 */}
        <div className="row g-0">

          <div className="col-6">
            <div className="grid-box">
              First col
            </div>
          </div>

          <div className="col-6">
            <div className="grid-box">
              Second col
            </div>
          </div>

        </div>

        {/* Row 2 */}
        <div className="row g-0">

          <div className="col-4">
            <div className="grid-box">
              col
            </div>
          </div>

          <div className="col-4">
            <div className="grid-box">
              col
            </div>
          </div>

          <div className="col-4">
            <div className="grid-box">
              col
            </div>
          </div>

        </div>

        {/* Row 3 */}
        <div className="row g-0">

          <div className="col-3">
            <div className="grid-box">
              col
            </div>
          </div>

          <div className="col-3">
            <div className="grid-box">
              col
            </div>
          </div>

          <div className="col-3">
            <div className="grid-box">
              col
            </div>
          </div>

          <div className="col-3">
            <div className="grid-box">
              col
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="footer">
          Created by ABC!
        </div>

      </div>
    </div>
  );
}

export default Exercise1;