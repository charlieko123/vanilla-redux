import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store";
import Todo from "../components/ToDo";

function Home() {
  const [text, setText] = useState("");
  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();

  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    if (text.trim()) {
      dispatch(add(text));
    }
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <Todo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

// function mapStateToProps(state) {
//   return { toDos: state };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     addToDo: (text) => dispatch(add(text)),
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;
