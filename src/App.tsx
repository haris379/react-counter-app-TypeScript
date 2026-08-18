import { useState } from "react";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";

interface CounterObject {
  id: number;
  value: number;
}

const App = () => {
  const [counters, setCounters] = useState<CounterObject[]>([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);

  const handleIncrement = (counter: CounterObject) => {
    const updatedCounter = [...counters];
    const index = updatedCounter.indexOf(counter);
    updatedCounter[index] = { ...counter };
    updatedCounter[index].value++;
    setCounters(updatedCounter);
  };
  const handleDecrement = (counter: CounterObject) => {
    const updatedCounter = [...counters];
    const index = updatedCounter.indexOf(counter);
    updatedCounter[index] = { ...counter };
    updatedCounter[index].value > 0
      ? updatedCounter[index].value--
      : (updatedCounter[index].value = 0);
    setCounters(updatedCounter);
  };

  const handleDelete = (id: number) => {
    setCounters(counters.filter((count) => count.id !== id));
  };

  const handleReset = () => {
    const resetCount = counters.map((c) => {
      c.value = 0;
      return c;
    });
    setCounters(resetCount);
  };

  const handleAdd = () => {
    const newCounter = {
      id: counters.length + 1,
      value: 0,
    };

    setCounters([...counters, newCounter]);
  };

  return (
    <>
      <Navbar totalCounters={counters.filter((c) => c.value > 0).length} />
      <main className="container">
        <Counters
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          onReset={handleReset}
          addCounter={handleAdd}
          counters={counters}
        />
      </main>
    </>
  );
};

export default App;
