import React from "react";
import { useState } from "react";

function Users({ users }) {
  const [position, setPosition] = useState(0);

  function nextUser() {
    if (position === users.length - 1) {
      setPosition(0);
    } else {
      setPosition(position + 1);
    }
  }

  function prevUser() {
    if (position === 0) {
      setPosition(users.length - 1);
    } else {
      setPosition(position - 1);
    }
  }

  const current = users[position];
  return (
    <div className="users">
      {current ? (
        <div className="card">
          <img src={current.picture.large} alt={current.name.first} />
          <h3>
            {current.name.first} {current.name.last}
          </h3>
          <h3>{current.email}</h3>
          <h3>{current.phone}</h3>

          <div className="btn-container">
            <button onClick={prevUser} className="pagination prev">
              Previous
            </button>
            <button onClick={nextUser} className="pagination next">
              Next
            </button>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Users;
