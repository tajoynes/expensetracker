import React, { useContext } from "react";
import { Button, Card, List, Header } from "semantic-ui-react";
import { Transaction } from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <Header as="h3">History</Header>
      <List>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </List>
    </>
  );
};
