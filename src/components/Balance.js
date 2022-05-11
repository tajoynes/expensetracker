import React, { useContext } from "react";
import { Header } from "semantic-ui-react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <Header as="h4">Your Current Balance</Header>
      <h2>${total}</h2>
    </>
  );
};
