import { useState } from "react";

/**
 * @description 기존의 useState를 이용해서 form과 input을 다룸 (Legacy)
 * @todo React-Hook-Form을 이용해서 좀 더 단순하게 form을 다뤄야 함.
 * @returns TodoList Component
 */
const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todoError, setTodoError] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodoError("");
    setTodo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (todo.length < 10) {
      return setTodoError("Todo should be longer");
    }
    console.log("submit");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} placeholder="Write a todo" />
        <button>Add</button>
        {todoError !== "" ? todoError : null}
      </form>
    </div>
  );
};

export default TodoList;
