import { useState } from "react";

const numbers: number[] = [64, 84, 22, 32, 83, 65, 51, 26, 23, 56];

export default function App() {
  const [filteredNumbers, setFilteredNumbers] = useState(numbers);

  const radioChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "even") {
      setFilteredNumbers(
        numbers.filter((number) => {
          if (number % 2 === 0) {
            return true;
          }
          return false;
        })
      );
    } else {
      setFilteredNumbers(
        numbers.filter((number) => {
          if (number % 2 !== 0) {
            return true;
          }
          return false;
        })
      );
    }
  };

  return (
    <div>
      <p>Number filtering</p>
      <input
        type="radio"
        name="evenOrOdd"
        id="even"
        value="even"
        onChange={radioChangeHandler}
      />
      <label htmlFor="even">Even</label>
      <input
        type="radio"
        name="evenOrOdd"
        id="odd"
        value="odd"
        onChange={radioChangeHandler}
      />
      <label htmlFor="odd">Odd</label>
      <ul>
        {filteredNumbers.map((number) => {
          return <li key={number}>{number}</li>;
        })}
      </ul>
    </div>
  );
}
