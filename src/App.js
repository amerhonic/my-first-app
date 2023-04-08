import React from "react";
import "./App.css";

import PersonCard from "./compoments/Cards/PersonCard/PersonCard";

function App() {
  return (
    //  React.createElement("p", {}, "Neki paragraf");
    <>
      {" "}
      {/* Fragment - najcesce se koristi za wrappovanje */}
      <div className="App">
        
        <PersonCard />
      </div>
    </>
  );
}

export default App;