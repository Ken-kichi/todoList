import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, onSnapshot } from "firebase/firestore";

const Display = () => {
  const [todos, setTodos] = useState([
    {
      id: "",
      item: "",
      check: "",
      timestamp: ""
    }
  ]);

  useEffect(() => {
    const q = query(collection(db, "todolist"));
    const unSub = onSnapshot(q, (snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data().item,
          check: doc.data().check,
          timestamp: doc.data().timestamp
        }))
      );
    });
    return unSub;
  }, []);
  return (
    <>
      {todos[0]?.id && (
        <>
          {todos.map((todo) => (
            <p key={todo.id}>{todo.item}</p>
          ))}
        </>
      )}
    </>
  );
};

export default Display;
