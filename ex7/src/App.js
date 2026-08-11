import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container py-4">


      <div className="row g-2">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card border-primary border-5">
            <div className="bg-primary p-2">
              <img
                src="https://images.unsplash.com/photo-1553440569-bcc63803a83d"
                className="card-img-top p-2"
                alt="Car"
              />
            </div>
            <div className="card-body bg-primary text-center p-1">
              <p className="card-text text-black small mb-0">
                Some text inside the first card
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card border-warning border-5">
            <div className="bg-warning p-2">
              <img
                src="https://images.unsplash.com/photo-1553440569-bcc63803a83d"
                className="card-img-top p-2"
                alt="Car"
              />
            </div>
            <div className="card-body bg-warning text-center p-1">
              <p className="card-text text-black small mb-0">
                Some text inside the first card
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card border-danger border-5">
            <div className="bg-danger p-2">
              <img
                src="https://images.unsplash.com/photo-1553440569-bcc63803a83d"
                className="card-img-top p-2"
                alt="Car"
              />
            </div>
            <div className="card-body bg-danger text-center p-1">
              <p className="card-text text-black small mb-0">
                Some text inside the first card
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;