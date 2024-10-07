import CostItem from "./components/CostItem";


function App() {
  const coasts = [
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

  return (
    <div>
      <h1>Get started</h1>
      <CostItem 
        date={coasts[0].date}
        description={coasts[0].description} 
        amount={coasts[0].amount}
      />
      <CostItem 
        date={coasts[1].date}
        description={coasts[1].description} 
        amount={coasts[1].amount} 
      />
      <CostItem 
        date={coasts[2].date}
        description={coasts[2].description} 
        amount={coasts[2].amount} 
      />
    </div>
  );
}

export default App;
