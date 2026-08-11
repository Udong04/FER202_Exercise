// Title component
function Title({ text }) {
  return (
    <div className="card-title">
      {text}
    </div>
  );
}


// Description component
function Description({ text }) {
  return (
    <div className="card-description">
      {text}
    </div>
  );
}


// Image component
function Image({ url }) {
  return (
    <div className="card-image">
      <img src={url} alt="Card" />
    </div>
  );
}


// SimpleCard component
function SimpleCard({ item }) {
  return (
    <div className="simple-card">
      <Image url={item.imageUrl} />

      <div className="card-content">
        <Title text={item.title} />
        <Description text={item.description} />
      </div>
    </div>
  );
}


function Exercise4() {
  const item = {
    title: "A Title",
    description: "The description goes here.",
    imageUrl:
      "https://via.placeholder.com/150x120.png?text=IMG",
  };

  return (
    <section className="exercise">

      <p className="exercise-text">
        This is a common pattern seen around the web.
        Facebook messages, Tweets, and so on:
      </p>

      <SimpleCard item={item} />
    </section>
  );
}

export default Exercise4;