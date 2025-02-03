import Search from "./components/Search";
import initialDetails from "./data/initialDetails";
import { useSelector } from "react-redux";
import { exportData } from "./utils/exportData";
import "../src/App.css";
import { RootState } from "./app/store";

function App() {
  const counterState = useSelector((state: RootState) => state.counter);

  // Function to handle export button click
  const handleExportClick = () => {
    const updatedDetails = initialDetails.map((person) => ({
      ...person,
      rating: counterState.ratingsMap[person.id], // Update rating count for each person
    }));

    exportData(updatedDetails); // Export the updated data
  };

  return (
    <div className="App">
      <Search details={initialDetails} />
      <div className="export-btn-container">
        <button className="export-btn" onClick={handleExportClick}>Export Data</button>
      </div>
    </div>
  );
}

export default App;