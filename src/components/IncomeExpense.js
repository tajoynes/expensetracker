import React, { useContext } from "react";
import { Card } from "semantic-ui-react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <>
      <Card>
        <Card.Content
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h4>Income</h4>
          <span style={{ color: "green" }}>+{income}</span>
        </Card.Content>
        <Card.Content
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h4>Expense</h4>
          <span style={{ color: "red" }}>-{expense}</span>
        </Card.Content>
      </Card>
    </>
  );
};
