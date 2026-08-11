

function Exercise3() {
  return (
    <div>
      <style>
        {`
          .grid-box {
            background-color: #d3d3d3;
            border: 1px solid #999;
            height: 44px;
            padding: 7px 10px;
            font-size: 12px;
          }

          .footer {
            background-color: #d8caca;
            text-align: center;
            font-size: 25px;
            font-weight: bold;
            padding: 2px;
            margin-top: 17px;
          }
        `}
      </style>

      <div className="container mt-5">

        {/* Header */}
        <div className="bg-light p-4 mb-3">
          <h2>Let's test the grid!</h2>
        </div>

        {/* Navigation */}
        <ul className="nav mb-4">

          <li className="nav-item">
            <a className="nav-link active" href="#">
              Active
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>

        </ul>

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

export default Exercise3;