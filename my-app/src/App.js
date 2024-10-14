import React, {useState} from "react";
import Costs from "./components/Costs/Costs.js";
import NewCost from "./components/NewCost/NewCost.js";


const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2023, 10, 7),
    description: "Guitar",
    amount: 999.99
  },
  {
    id: 'c2',
    date: new Date(2024, 5, 22),
    description: "Sony Playstation 5",
    amount: 649.99
  },
  {
    id: 'c3',
    date: new Date(2023, 12,17),
    description: "Monitor",
    amount: 559.99
  },
  {
    id: 'c4',
    date: new Date(2022, 9, 21),
    description: "Processor",
    amount: 779.99
  },
];


function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts(previousCost => {
      return [cost, ...previousCost];
    });
  }

  /*return React.createElement(
    'div', {},
    React.createElement('h1', {}, 'Get Started'),
    React.createElement(Costs, {costs: costs}));*/

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
