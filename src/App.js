import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // Alert display
    } else if (name && isEditing) {
      //edit
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  return (
    <section className="section-center">
      <form className="grocery-from" onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>List item</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="Add list item"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "Editing" : "Add"}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <List items={list} />
        <button className="clear-btn">Delete</button>
      </div>
    </section>
  );
}

export default App;
