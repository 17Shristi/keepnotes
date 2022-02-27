import React, { useState } from "react";

function Createnode(props) {

  const [note, setnote] = useState({
    title: "",
    content: ""
  });
  function handlechange(event) {
    const { name, value } = event.target;
    setnote((prevvalue) => {
      return {
        ...prevvalue,
        [name]: value,
      };
    });
  }
  function handleclick(event) {
    props.onadd(note);
    setnote({
        title: "",
        content: ""
      });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handlechange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handlechange}
          value={note.content}
          placeholder="Take a note here"
          rows="3"
        />
        <button onClick={handleclick}>Add</button>
      </form>
    </div>
  );
}
export default Createnode;
