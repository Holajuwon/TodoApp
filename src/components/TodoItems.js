import React from "react";

const TodoItems = props => (
  <div className="todoItems">
    <div className="todoText">{props.individualItem}</div>
    <button onClick={() => props.handleRemoveOneItem(props.individualItem)}>
      x
    </button>
  </div>
);
const RemoveAll = props => {
  if (props.allItem.length > 1) {
    return <button onClick={props.handleRemoveAll}>Clear All</button>;
  } else {
    return null;
  }
};

const SearchAll=props=>(
  <input type='text' onChange={props.SearchAll} value={props.value}/>
)
export { TodoItems, RemoveAll, SearchAll };
