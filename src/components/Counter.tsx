interface CounterObject {
  id: number;
  value: number;
}

interface CounterProps {
  count: CounterObject;
  onIncrement: (counter: CounterObject) => void;
  onDecrement: (counter: CounterObject) => void;
  onDelete: (id: number) => void;
}

const Counter = ({
  count,
  onIncrement,
  onDelete,
  onDecrement,
}: CounterProps) => {
  const formatCount = () => {
    return count.value === 0 ? "Zero" : count.value;
  };

  const getClasses = (): string => {
    let classes = "badge m-2 text-bg-";
    classes += count.value === 0 ? "warning" : "primary";
    return classes;
  };

  return (
    <>
      <div className="d-flex flex-row mb-3 align-items-center">
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => onDecrement(count)}
        >
          Decrement
        </button>
        <span className={getClasses()}>{formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => onIncrement(count)}
        >
          Increment
        </button>

        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => onDelete(count.id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Counter;
