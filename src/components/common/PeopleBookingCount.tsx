import React, { useState } from "react";

export enum IncrementDirectionEnum {
  INCREASE = "INCREASE",
  DECREASE = "DECREASE",
}

export enum PeopleSelectionEnum{
    adult= 'adult',
    children= 'children',
    room = 'room'
}

interface IProps {
  labelText: string;
  initValue: number;
}

const PeopleBookingCount: React.FC<IProps> = ({ labelText, initValue = 0 }) => {
  const [count, setCount] = useState(initValue);
  const handleOption = (choice: IncrementDirectionEnum) => {
    switch (choice) {
      case IncrementDirectionEnum.INCREASE:
        setCount(count + 1);
        break;
      case IncrementDirectionEnum.DECREASE:
        if (count === 0) {
          break;
        } else {
          setCount(count - 1);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="optionItem">
      <span className="optionText">{labelText}</span>
      <div className="optionCounter">
        <button
          className="optionCounterButton"
          onClick={(e) => handleOption(IncrementDirectionEnum.DECREASE)}
        >
          -
        </button>
        <span className="optionCounterNumber">{count}</span>
        <button
          className="optionCounterButton"
          onClick={(e) => handleOption(IncrementDirectionEnum.INCREASE)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default PeopleBookingCount;
