import Counter from "./Counter";

interface CounterObject {
  id: number;
  value: number;
}

interface CounterProps {
  counters: CounterObject[];
  onIncrement: (counter: CounterObject) => void;
  onDecrement: (counter: CounterObject) => void;
  onDelete: (id: number) => void;
  onReset: () => void;
  addCounter : () => void;
}

const Counters = ({
  counters,
  onIncrement,
  onDelete,
  onReset,
  onDecrement,
  addCounter,
}: CounterProps) => {
  return (
    <>
      <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
        Reset
      </button>
       <button className="btn btn-primary btn-sm m-2" onClick={addCounter}>
        Add Counter
      </button>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
          count={count}
        />
      ))}
    </>
  );
};

export default Counters;
