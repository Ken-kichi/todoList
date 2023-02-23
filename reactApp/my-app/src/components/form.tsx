import React, { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const Form = () => {
  const [text, setText] = useState("");

  const submitItem = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "todolist"), {
      item: text,
      check: false,
      timestamp: serverTimestamp()
    });
  };
  return (
    <>
      <form onSubmit={submitItem}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>追加</button>
      </form>
    </>
  );
};

export default Form;
