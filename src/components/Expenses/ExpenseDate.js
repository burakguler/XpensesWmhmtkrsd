import "./ExpenseDate.css";
import { useEffect, useState } from "react";

const ExpenseDate = (props) => {
  const [stateDate, setDateState] = useState({});

  useEffect(() => {
    setDateState({
      date: props.date.toLocaleString("tr-TR", { month: "long" }),
    });
  }, []);

  return (
    <div className="expense-date">
      <div className="expense-date_month">{stateDate.date}</div>
    </div>
  );
};

export default ExpenseDate;
