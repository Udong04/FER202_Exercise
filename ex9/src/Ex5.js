function Header() {
  return (
    <header className="website-header">
      <div className="logo">
        <div className="fpt-logo">
          <span className="f">F</span>
          <span className="p">P</span>
          <span className="t">T</span>
        </div>

        <span className="education">
          Education
        </span>
      </div>

      <div className="university">
        FPT UNIVERSITY
      </div>

      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}


function About() {
  return (
    <section id="about" className="website-section">
      <h2>About</h2>
      <p>
        This is the about section of the website.
      </p>
    </section>
  );
}


function Contact() {
  return (
    <section id="contact" className="website-section">
      <h2>Contact</h2>
      <p>
        For any inquiries, please contact us at
        example@example.com.
      </p>
    </section>
  );
}


function Footer() {
  return (
    <footer className="website-footer">
      © 2023 Website. All rights reserved.
    </footer>
  );
}


function Exercise5() {
  return (
    <section className="exercise">
  

      <div className="website">
        <Header />

        <main>
          <About />
          <Contact />
        </main>

        <Footer />
      </div>
    </section>
  );
}

export default Exercise5;