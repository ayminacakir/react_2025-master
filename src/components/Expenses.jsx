
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";

function Expenses(expenses){
    return(
< Card className="expenses">
      <ExpenseItem
        title={expenses.items[0].title}
        date={expenses.items[0].date}
        amount={expenses.items[0].amount}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses.items[1].title}
        date={expenses.items[1].date}
        amount={expenses.items[1].amount}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses.items[2].title}
        date={expenses.items[2].date}
        amount={expenses.items[2].amount}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses.items[3].title}
        date={expenses.items[3].date}
        amount={expenses.items[3].amount}
      ></ExpenseItem>

    </Card>

    );
}
export default Expenses;