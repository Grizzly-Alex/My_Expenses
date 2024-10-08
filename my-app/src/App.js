//import React from "react";
import Costs from "./components/Costs/Costs";


function App() {
  const costs = [
    {
      date: new Date(2024, 10, 7),
      description: "Холодильник",
      amount: 999.99
    },
    {
      date: new Date(2024, 5, 22),
      description: "телевизор",
      amount: 649.99
    },
    {
      date: new Date(2023, 12,17),
      description: "Духовка",
      amount: 559.99
    },

  ];

  /*return React.createElement(
    'div', {},
    React.createElement('h1', {}, 'Get Started'),
    React.createElement(Costs, {costs: costs}));*/

  return (
    <div>
      <h1>Get started</h1>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
