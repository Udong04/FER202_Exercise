

function Exercise5() {
  return (
    <div>
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
          }

          .fpt-title {
            color: #f07822;
            font-family: Georgia, serif;
            font-weight: bold;
            font-size: 20px;
            margin: 10px 0;
          }

          .main {
            width: 650px;
            margin: auto;
          }

          /* Header */

          .header {
            background-color: #f28c22;
            padding: 10px;
          }

          .top-header {
            background-color: #f5d3ae;
            padding: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .small-logo {
            width: 80px;
          }

          .menu a {
            color: #e8751a;
            text-decoration: none;
            font-size: 10px;
            margin: 0 4px;
          }

          .search {
            font-size: 10px;
          }

          .search input {
            width: 80px;
            height: 18px;
          }

          /* Banner */

          .banner {
            width: 100%;
            height: 180px;
            object-fit: cover;
            margin-top: 10px;
          }

          /* Breadcrumb */

          .breadcrumb {
            font-size: 9px;
            margin: 8px 20px 20px;
          }

          /* Students */

          .student-title {
            text-align: center;
            font-size: 14px;
            margin-bottom: 5px;
          }

          .students {
            width: 430px;
            margin: auto;
          }

          .student-card {
            border: 1px solid #ddd;
            height: 185px;
            padding: 5px;
            text-align: center;
          }

          .student-card img {
            width: 100%;
            height: 115px;
            object-fit: cover;
          }

          .student-card p {
            font-size: 7px;
            text-align: left;
            margin: 3px 0;
          }

          .student-info {
            display: flex;
            justify-content: space-between;
            font-size: 7px;
            text-align: left;
          }

          .student-card button {
            background-color: #f58220;
            color: white;
            border: none;
            font-size: 7px;
            padding: 2px 7px;
            margin-top: 4px;
          }

          /* Footer */

          .footer {
            background-color: #f47c32;
            padding: 12px;
            margin-top: 15px;
            font-size: 8px;
          }

          .footer-content {
            display: flex;
            justify-content: space-between;
          }

          .copyright {
            text-align: center;
            margin-top: 12px;
            font-size: 7px;
          }

          /* Responsive */

          @media (max-width: 700px) {

            .main {
              width: 95%;
            }

            .students {
              width: 90%;
            }

          }
        `}
      </style>

      {/* Title */}
      <h3 className="fpt-title">
        FPT UNIVERSITY
      </h3>

      <div className="main">

        {/* Header */}
        <div className="header">

          <div className="top-header">

            <img
              src="/fpt-logo.png"
              alt="FPT"
              className="small-logo"
            />

            <div className="menu">

              <a href="#">
                Trang chủ
              </a>

              <a href="#">
                Đăng nhập
              </a>

              <a href="#">
                Sinh viên
              </a>

              <a href="#">
                Thông tin
              </a>

            </div>

            <div className="search">

              Search:

              <input type="text" />

            </div>

          </div>

          {/* Banner */}
          <img
            src="/images/anh.jpg"
            alt="Students"
            className="banner"
          />

        </div>

        {/* Breadcrumb */}
        <div className="breadcrumb">
          Home / Students
        </div>

        {/* Student Detail */}
        <h4 className="student-title">
          Students Detail
        </h4>

        <div className="students">

          <div className="row g-2">

            {/* Student 1 */}
            <div className="col-6">

              <div className="student-card">

                <img
                  src="/images/anh.jpg"
                  alt="Student 1"
                />

                <p>
                  DE160162
                </p>

                <div className="student-info">

                  <span>
                    Nguyen Huu Quoc Kinh
                  </span>

                  <span>
                    DaNang
                    <br />
                    ● Absent
                  </span>

                </div>

                <button>
                  Submit
                </button>

              </div>

            </div>


            {/* Student 2 */}
            <div className="col-6">

              <div className="student-card">

                <img
                  src="/images/anh.jpg" alt="Student 2"
                />

                <p>
                  DE160377
                </p>

                <div className="student-info">

                  <span>
                    Chu Van Thien
                  </span>

                  <span>
                    QuangNam
                    <br />
                    ● Absent
                  </span>

                </div>

                <button>
                  Submit
                </button>

              </div>

            </div>


            {/* Student 3 */}
            <div className="col-6">

              <div className="student-card">

                <img
                   src="/images/anh.jpg"
                  alt="Student 3"
                />

                <p>
                  DE165457
                </p>

                <div className="student-info">

                  <span>
                    Do Nguyen Phuc
                  </span>

                  <span>
                    QuangNam
                    <br />
                    ● Absent
                  </span>

                </div>

                <button>
                  Submit
                </button>

              </div>

            </div>


            {/* Student 4 */}
            <div className="col-6">

              <div className="student-card">

                <img
                  src="/images/anh.jpg"
                  alt="Student 4"
                />

                <p>
                  DE170049
                </p>

                <div className="student-info">

                  <span>
                    Le Hoang Minh
                  </span>

                  <span>
                    DaNang
                    <br />
                    ● Absent
                  </span>

                </div>

                <button>
                  Submit
                </button>

              </div>

            </div>

          </div>

        </div>


        {/* Footer */}
        <footer className="footer">

          <div className="footer-content">

            <div>
              <b>Our Address</b>
              <br />
              FPT University
              <br />
              Da Nang, Viet Nam
              <br />
              Tel: 0123456789
            </div>

            <div>
              G+ &nbsp; f &nbsp; in &nbsp; 🐦 &nbsp; ✉
            </div>

          </div>

          <div className="copyright">
            © Copyright 2023
          </div>

        </footer>

      </div>
    </div>
  );
}

export default Exercise5;