import st from "./PartOne.module.css";
import { Inputs } from "../Inputs/Inputs";
import { useState } from "react";
export const PartOne = () => {
  /////for input field

  const [value, setValue] = useState("");
  ///// todos
  const [todo, setTodo] = useState([]);
  /////for input field
  const [line, setLine] = useState(true);
  const [newInput, setNewInput] = useState("");
  function connect(e) {
    setValue(e.target.value);
  }

  function doings() {
    if (value.trim()) {
      ////copy todo array
      setTodo((prev) => {
        return [
          ...prev,
          {
            //////new item for copied array
            id: Date.now(),
            title: value,
            isDone: false,
          },
        ];
      });
    } ////// delete input field
    setValue("");
  } //////////////remove li
  function removeTodo(id) {
    setTodo(
      todo.filter((el) => {
        return el.id !== id;
      })
    );
  }
  function forCheck(id) {
    setTodo(
      todo.map((el) => {
        if (id === el.id) {
          return { ...el, isDone: !el.isDone };
        }
        return el;
      })
    );
  }
  function changeLine() {
    if (line) {
      setLine(false);
    }
  }
  function newInputConnect(e) {
    setNewInput(e.target.value);
  }

  return (
    <>
      <div className={st.partOne}>
        <Inputs type="text" onChange={connect} value={value} />

        <button onClick={doings}>Add</button>
      </div>
      <div className={st.draw}>
        {todo.map((el) => {
          return (
            <li key={el.id}>
              <Inputs
                type="checkbox"
                checked={el.isDone}
                onChange={() => {
                  forCheck(el.id);
                }}
              />

              {line ? (
                <span onDoubleClick={changeLine}>{el.title}</span>
              ) : (
                <Inputs type="text" onChange={newInputConnect} value={newInput} />
              )}
              <button
                onClick={() => {
                  removeTodo(el.id);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </div>
    </>
  );
};
