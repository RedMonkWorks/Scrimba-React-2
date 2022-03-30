import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./components/data";

function App() {
  const cardData = data.map((data) => {
    return (
      <Card
        key={data.id}
        img={data.coverImg}
        stars={data.stats.rating}
        reviews={data.stats.reviewCount}
        country={data.location}
        heading={data.title}
        cost={`$${data.price}`}
        availability={data.openSpots}
      />
    );
  });
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        <div className="container-lessons">{cardData}</div>
      </header>
    </div>
  );
}

export default App;
