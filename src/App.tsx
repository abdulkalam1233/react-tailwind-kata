import React from "react";
import logo from "./logo.png";

const App = () => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div className="shrink-0">
        <img className="h-12 w-12" src={logo} alt="ChitChat Logo" />
      </div>
      <div>
        <div className="text-xl font-medium text-blue-900">
          Webpack Tailwind setup
        </div>
        <p className="text-slate-500">Webpack tailwind kata!</p>
      </div>
    </div>
  );
};

export default App;
