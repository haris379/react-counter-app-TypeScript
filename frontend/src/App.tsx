import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";
import Signup from "./Pages/Signup";
import ProfileCard from "./components/ProfileCard";
import LoginWithID from "./Pages/LoginWithID";
import api from "./api/axios.ts";

interface CounterObject {
  id: number | string;
  value: number;
}

const defaultCounters: CounterObject[] = [
  { id: "1", value: 0 },
  { id: "2", value: 0 },
  { id: "3", value: 0 },
  { id: "4", value: 0 },
];

const CounterApp = () => {
  const [counters, setCounters] = useState<CounterObject[]>([]);

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

  const token = localStorage.getItem("token");

  const handleDelete = async (id: string | number) => {
    try {
      await api.delete(`/counter/${id}`);

      setCounters((prevCounters) =>
        prevCounters.filter((counter) => counter.id !== id),
      );

      console.log("Counter deleted successfully");
    } catch (error: any) {
      console.error("Error deleting counter:", error);

      if (error.response?.status === 401) {
        alert("Please login to continue");
      }
    }
  };

  const handleReset = () => {
    setCounters(
      counters.map((c) => ({
        ...c,
        value: 0,
      })),
    );
  };

  const handlelogout = () => {
    setCounters(defaultCounters);
  };

  const handleAdd = async () => {
    try {
      const response = await api.post("/counter/add");

      const newCounter = response.data.counter;

      setCounters((prevCounters) => [
        ...prevCounters,
        {
          id: newCounter._id,
          value: newCounter.value,
        },
      ]);

      console.log(newCounter);
    } catch (error: any) {
      if (error.response?.status === 401) {
        alert("Please login to continue");
        return;
      }

      console.error("Error adding counter:", error);
    }
  };

  return (
    <>
      <Navbar onLogout={handlelogout} />

      <h1 className="mt-5 sm:mt-6 mb-4 px-4 text-2xl sm:text-3xl font-bold text-center">
        Counter App
        <span className="ml-2 px-2.5 py-0.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 rounded-full">
          {counters.filter((c) => c.value > 0).length}
        </span>
      </h1>

      <main className="w-full max-w-4xl mx-auto px-2 sm:px-4">
        <Counters
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          onReset={handleReset}
          addCounter={handleAdd}
          counters={counters}
        />
        {!token ? <ProfileCard /> : <div></div>}
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
        <Route path="/login-id/:id" element={<LoginWithID />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
