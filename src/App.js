import React from "react";
import Search from "./components/Search";
import initialDetails from "./data/initialDetails";
import '../src/App.css';

function App() {
  return (
    <div className="App">      
      <Search details={initialDetails} />      
    </div>
  );
}

export default App;
