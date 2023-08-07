import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Card from './components/Card';
import data from "./data";


function App() {
  const htmlCardElem = data.map(elem => {
      return (
      <Card 
      key={elem.id}
      img={elem.coverImg}
      rating={elem.stats.rating}
      reviewCount={elem.stats.reviewCount}
      country={elem.location}
      title={elem.title}
      price={elem.price}
      />)
  })
  return (
    <div className="App">
      <Header />
      <Main />
      <div className='comp-wrapper'>
        {htmlCardElem}
      </div>
    </div>
  );
}

export default App;
