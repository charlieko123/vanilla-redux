import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../store";
import { Link } from "react-router-dom";

function Todo({ text, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(remove(id));
  };

  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={handleDelete}>DEL</button>
    </li>
  );
}

// function mapDispatchToProps(dispatch, ownProps) {
//   return {
//     onBtnClick: () => dispatch(remove(ownProps.id)),
//   };
// }

// export default connect(null, mapDispatchToProps)(Todo);
export default Todo;
