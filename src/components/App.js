import SushiPage from "./SushiPage";

const API = "http://localhost:3001/sushis";

function App() {
  return (
    <div className="app">
      <SushiPage api={API}/>
    </div>
  );
}

export default App;
