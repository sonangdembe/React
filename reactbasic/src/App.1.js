import React from "react";
import Contact from "./components/Contact";
import Wrapper from "./Wrapper";

export const App = () => {
  const contacts = [
    {
      name: "john",
      number: "456",
      location: "usa",
    },
    {
      name: "john1",
      number: "456",
      location: "nepal",
    },
    {
      name: "john2",
      number: "456",
      location: "ktm",
    },
  ];
  return (
    <>
      <Wrapper />
      <div
        className="container"
        style={{ color: "black", background: "green" }}
      >
        <h3>Contact List</h3>
        <Contact data={contacts[0]} />
        <Contact data={contacts[1]} />
        <Contact data={contacts[2]} />
      </div>
    </>
  );
};
