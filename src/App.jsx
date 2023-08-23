import { useLoaderData } from "react-router-dom";
import Header from "./components/Header";
import CoffeCard from "./components/CoffeCard";
import { useState } from "react";

function App() {
  const loadedCoffee = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffee);
  return (
    <div className="bg-white">
      <Header></Header>
      <div className="grid grid-cols-3 gap-4 max-w-screen-xl mx-auto my-16">
        {coffees.map((coffee) => (
          <CoffeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
