import { useRecoilValue } from "recoil";
import { todoState } from "./atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

function TodoList() {
  const todos = useRecoilValue(todoState);
  console.log(todos);
  return (
    <div>
      <h1>Todo</h1>
      <hr />
      <CreateTodo />
      <ul>
        {todos.map((todo) => (
          <Todo {...todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
