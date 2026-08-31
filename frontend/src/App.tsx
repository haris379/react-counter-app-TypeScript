import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

interface CounterObject {
  id: number;
  value: number;
}

const defaultCounters: CounterObject[] = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
  { id: 4, value: 0 },
];

const CounterApp = () => {
  const userID = localStorage.getItem("userId");
  const [counters, setCounters] = useState<CounterObject[]>(() => {
    if (userID) {
      const savedCounters = localStorage.getItem("counters");

      return savedCounters ? JSON.parse(savedCounters) : defaultCounters;
    }

    return defaultCounters;
  });

  useEffect(() => {
    localStorage.setItem("counters", JSON.stringify(counters));
  }, [counters]);

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

    if (updatedCounter[index].value > 0) {
      updatedCounter[index].value--;
    }

    setCounters(updatedCounter);
  };

  const handleDelete = (id: number) => {
    setCounters(counters.filter((count) => count.id !== id));
  };

  const handleReset = () => {
    setCounters(
      counters.map((c) => ({
        ...c,
        value: 0,
      })),
    );
  };

  const handleAdd = () => {
    const newCounter: CounterObject = {
      id: counters.length > 0 ? Math.max(...counters.map((c) => c.id)) + 1 : 1,
      value: 0,
    };

    setCounters([...counters, newCounter]);
  };

  return (
    <>
      <Navbar />

      <h1 className="mt-6 mb-4 text-3xl font-bold text-center">
        Counter App
        <span className="ml-2 px-2.5 py-0.5 text-sm font-semibold text-white bg-blue-600 rounded-full">
          {/* {totalCounters} */} {counters.filter((c) => c.value > 0).length}
        </span>
      </h1>
      <main className="max-w-4xl mx-auto px-4">
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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CounterApp />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
