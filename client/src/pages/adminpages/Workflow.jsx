import React from "react";
import Board from "react-trello";

const Workflow = () => {
  const data = {
    lanes: [
      {
        id: "1",
        title: "To Do",
        cards: [
          { id: "Card1", title: "Task 1", description: "Task 1 description" },
          { id: "Card2", title: "Task 2", description: "Task 2 description" },
        ],
      },
      {
        id: "2",
        title: "In Progress",
        cards: [],
      },
      {
        id: "3",
        title: "Done",
        cards: [],
      },
    ],
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Workflow Management</h1>
      <p>Manage your tasks efficiently with our Kanban board.</p>
      <Board data={data} draggable />
    </div>
  );
};

export default Workflow;
