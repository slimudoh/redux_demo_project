import React, { useState, useEffect } from "react";

import axios from "axios";

function Usestate() {
  const [testArray, seTestArray] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(resp => {
        const data = resp.data;

        seTestArray(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Completed</th>
            <th>ID</th>
            <th>title</th>
            <th>userId</th>
          </tr>
        </thead>
        <tbody>
          {testArray.map(item => (
            <tr key={item.id}>
              <td>{item.completed ? "true" : "false"}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// completed: false
// id: 1
// title: "delectus aut autem"
// userId: 1

export default Usestate;
