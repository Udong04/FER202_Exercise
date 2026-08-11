

function Exercise4() {
  return (
    <div>
      <style>
        {`
          .fpt-header {
            background-color: #f28c22;
            text-align: center;
            padding: 7px 0;
          }

          .fpt-logo {
            width: 315px;
            height: 135px;
            object-fit: contain;
            background-color: white;
          }

          .fpt-menu {
            margin-top: 3px;
          }

          .fpt-menu a {
            color: white;
            text-decoration: none;
            margin: 0 5px;
            font-size: 13px;
          }

          .content {
            text-align: center;
            padding: 25px 0;
          }

          .content h3 {
            font-weight: bold;
            margin-bottom: 12px;
          }

          .content p {
            font-size: 13px;
          }

          .fpt-footer {
            background-color: #f4cf83;
            color: white;
            text-align: center;
            padding: 18px;
            font-size: 13px;
          }
        `}
      </style>

      <div className="container">

        {/* Header */}
        <header className="fpt-header">

          <img
            src="/fpt-logo.png"
            alt="FPT University"
            className="fpt-logo"
          />

          {/* Menu */}
          <nav className="fpt-menu">

            <a href="#home">
              Home
            </a>

            <a href="#about">
              About
            </a>

            <a href="#contact">
              Contact
            </a>

          </nav>

        </header>

        {/* Content */}
        <div className="content">

          <section id="about">

            <h3>
              About
            </h3>

            <p>
              This is the about section of the website.
            </p>

          </section>

          <section id="contact">

            <h3>
              Contact
            </h3>

            <p>
              For any inquiries, please contact us at
              example@example.com.
            </p>

          </section>

        </div>

        {/* Footer */}
        <footer className="fpt-footer">

          © 2023 Website. All rights reserved.

        </footer>

      </div>
    </div>
  );
}

export default Exercise4;