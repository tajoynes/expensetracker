import React, { useState, useContext } from "react";
import { Button, Form, Header } from "semantic-ui-react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <Header as="h3">Add Transaction</Header>
      <Form
        onSubmit={onSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Form.Group widths="equal">
          <Form.Input
            type="text"
            label="Description"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Form.Input
            type="number"
            label="Amount"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Form.Group>
        <Button color="teal">Add Transaction</Button>
      </Form>
    </>
  );
};
