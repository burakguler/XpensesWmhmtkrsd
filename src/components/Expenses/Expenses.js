import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import {data} from "../../data/xpensesdata"

const Expenses = () => {
  const changeData=(item)=>{
  let oldObj= data.find(d=>d.id===item.id);
  oldObj.title="burak";
  
  }
 
  return (
    <Card className="expenses">
      {data.map((item,key) => {
        return (
          <ExpenseItem key={key}
          id={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
            change={p=>changeData(p)}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
