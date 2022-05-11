import React, { useContext } from "react";
import { List, Card, Button } from "semantic-ui-react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <List.Item>
      <Card
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
          alignItems: "center",
        }}
        color={transaction.amount < 0 ? "red" : "green"}
      >
        <Card.Description as="h4">{transaction.text}</Card.Description>
        <Card.Description>
          {sign}${Math.abs(transaction.amount)}
        </Card.Description>
        <Card.Meta>
          <Button
            size="mini"
            color="red"
            compact
            onClick={() => deleteTransaction(transaction.id)}
          >
            Delete
          </Button>
        </Card.Meta>
      </Card>
    </List.Item>
  );
};
