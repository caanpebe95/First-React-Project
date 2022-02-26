import logo from './logo.svg';
import './App.css';
import quotes from './quotes.json'

function App() {
  const quote = quotes[0];
  return (
    <div className="App">
      <h1>{quote.quote}</h1>
      <p>{quote.author}</p>
    </div>
  );
}

export default App;
