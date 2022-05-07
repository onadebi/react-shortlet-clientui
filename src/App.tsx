import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PublicLayout from "./pages/layout/PublicLayout";

function App() {
  return (
    <div className="app">
      <Router>
        <PublicLayout />
      </Router>
    </div>
  );
}

export default App;
