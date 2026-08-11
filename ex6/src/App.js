function App() {
  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>

          <div className="navbar-nav d-flex flex-row">
            <a className="nav-link mx-2" href="#">
              Home
            </a>
            <a className="nav-link mx-2" href="#">
              Link
            </a>
            <a className="nav-link mx-2" href="#">
              Dropdown
            </a>
          </div>

          <form className="d-flex">
            <input
              className="form-control me-2"
              placeholder="Search"
            />
            <button className="btn btn-outline-primary">
              Search
            </button>
          </form>
        </div>
      </nav>

      {/* Banner */}
      <div className="container-fluid p-0">
        <div
          className="bg-secondary d-flex justify-content-center align-items-center"
          style={{ height: "300px" }}
        >
          <h1 className="text-white">1920 x 530</h1>
        </div>
      </div>

      {/* Product */}
      <div className="container mt-4">
        <h4>NEW PRODUCT</h4>
        <p className="text-muted">List product description</p>

        <div className="row g-3">
          {products.map((product) => (
            <div
              className="col-12 col-sm-6 col-md-3"
              key={product.id}
            >
              <div className="card">
                <div
                  className="bg-secondary text-white d-flex justify-content-center align-items-center"
                  style={{ height: "180px" }}
                >
                  280 x 280
                </div>

                <div className="card-body">
                  <h6>{product.name}</h6>

                  <p className="text-danger">
                    80,000 VND
                  </p>

                  <button className="btn btn-primary btn-sm">
                    Mua
                  </button>

                  <button className="btn btn-outline-secondary btn-sm ms-2">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusion */}
      <div className="container mt-5">
        <h5>Conclusion</h5>

        <p className="text-center">
          After learning about Bootstrap Grid, you can build a
          responsive website layout
        </p>
      </div>
    </div>
  );
}

export default App;