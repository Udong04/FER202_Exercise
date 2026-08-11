import { useState } from "react";
import Exercise1 from "./Ex1";
import Exercise2 from "./Ex2";
import Exercise5 from "./Ex5";
import Exercise4 from "./Ex4";
import Exercise3 from "./Ex3";



function App() {
  return (
    <div className="App">


      <Exercise1 />

      <Exercise2 />

      <Exercise3 />

      <Exercise4/>

      <Exercise5 />


      {/* =========================
          CSS
      ========================= */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #ffffff;
          color: #111827;
        }

        .App {
          width: 90%;
          max-width: 900px;
          margin: 0 auto;
          padding: 30px 20px;
        }

        .App > h1 {
          font-family: Georgia, serif;
          font-style: italic;
          margin-bottom: 35px;
          color: #1f2937;
        }


        /* =====================
           COMMON EXERCISE
        ===================== */

        .exercise {
          margin-bottom: 45px;
        }

        .exercise h2 {
          font-family: Georgia, serif;
          font-size: 22px;
          margin-bottom: 15px;
          padding-bottom: 10px;
          border-bottom: 1px solid #ddd;
        }


        /* =====================
           EXERCISE 1
        ===================== */

        .intro {
          text-align: center;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 5px;
          background: #fafafa;
        }

        .intro h3 {
          margin: 0 0 10px;
          font-size: 24px;
        }

        .intro p {
          margin: 0;
          line-height: 1.6;
        }


        /* =====================
           EXERCISE 2
        ===================== */

        .hello {
          text-align: center;
          font-size: 30px;
          font-weight: bold;
          padding: 30px;
          background: #f5f5f5;
          border-radius: 5px;
        }


        /* =====================
           EXERCISE 3
        ===================== */

        .counter {
          text-align: center;
          border: 1px solid #ddd;
          padding: 25px;
          border-radius: 6px;
        }

        .counter h3 {
          margin-top: 0;
        }

        .count {
          font-size: 40px;
          font-weight: bold;
          margin: 20px 0;
        }

        .counter-buttons {
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        .counter-buttons button {
          min-width: 70px;
          padding: 10px 15px;
          border: 1px solid #aaa;
          border-radius: 4px;
          background: white;
          cursor: pointer;
          font-size: 16px;
        }

        .counter-buttons button:hover {
          background: #eee;
        }


        /* =====================
           EXERCISE 4
        ===================== */

        .exercise-text {
          margin-bottom: 25px;
        }

        .simple-card {
          width: 580px;
          max-width: 100%;
          min-height: 140px;
          margin: 0 auto;

          display: flex;

          border: 3px solid #3333ff;
          padding: 8px;

          background: white;
        }

        .card-image {
          width: 130px;
          min-width: 130px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #fff4bd;
          border: 2px solid #e6c83d;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          min-height: 120px;
          object-fit: cover;
        }

        .card-content {
          flex: 1;
          margin-left: 3px;
        }

        .card-title {
          height: 50px;

          display: flex;
          align-items: center;

          padding: 0 18px;

          border: 2px solid #f28c28;

          color: #e87517;
          font-family: Georgia, serif;
          font-size: 32px;
          font-weight: bold;
        }

        .card-description {
          min-height: 70px;

          display: flex;
          align-items: center;

          padding: 0 18px;

          border: 2px solid #aaa;

          color: #777;
          font-family: Georgia, serif;
          font-size: 22px;
        }


        /* =====================
           EXERCISE 5
        ===================== */

        .website {
          width: 100%;
          max-width: 730px;
          margin: 0 auto;
        }

        .website-header {
          background: #f28c28;
          padding-top: 8px;
          text-align: center;
        }

        .logo {
          width: 320px;
          height: 135px;
          margin: 0 auto;

          background: white;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .fpt-logo {
          font-size: 43px;
          font-weight: bold;
          font-style: italic;
          line-height: 1;
        }

        .fpt-logo .f {
          color: #1475bc;
        }

        .fpt-logo .p {
          color: #f37021;
        }

        .fpt-logo .t {
          color: #00a651;
        }

        .education {
          color: #1475bc;
          font-size: 20px;
          font-weight: bold;
          margin-top: -3px;
        }

        .university {
          color: #ed6d17;
          font-size: 28px;
          font-weight: bold;
          margin-top: -42px;
          margin-bottom: 12px;
          font-family: Georgia, serif;
        }

        .website-header nav {
          padding-bottom: 7px;
        }

        .website-header nav a {
          color: white;
          text-decoration: none;
          margin: 0 6px;
          font-size: 12px;
        }

        .website-header nav a:hover {
          text-decoration: underline;
        }

        .website-section {
          text-align: center;
          padding: 15px 10px 5px;
        }

        .website-section h2 {
          border: none;
          padding: 0;
          margin: 10px 0 15px;
          font-family: Arial, sans-serif;
          font-size: 18px;
        }

        .website-section p {
          font-size: 12px;
        }

        .website-footer {
          margin-top: 25px;
          padding: 18px;
          text-align: center;

          background: #f6cd7d;
          color: white;
          font-size: 12px;
        }


        /* =====================
           RESPONSIVE
        ===================== */

        @media (max-width: 600px) {

          .App {
            width: 100%;
            padding: 20px 12px;
          }

          .simple-card {
            width: 100%;
          }

          .card-image {
            width: 100px;
            min-width: 100px;
          }

          .card-title {
            font-size: 24px;
          }

          .card-description {
            font-size: 17px;
          }

          .logo {
            width: 260px;
          }

          .university {
            font-size: 22px;
          }
        }

      `}</style>

    </div>
  );
}

export default App;