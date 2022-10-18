import { useRecoilValue } from "recoil";
import { todoSelector } from "./atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

function TodoList() {
  const [todo, doing, done] = useRecoilValue(todoSelector);
  return (
    <div>
      <h1>Todos</h1>
      <hr />
      <CreateTodo />
      <h2>Todo</h2>
      <ul>
        {todo.map((item) => (
          <Todo {...item} key={item.id} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((item) => (
          <Todo {...item} key={item.id} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((item) => (
          <Todo {...item} key={item.id} />
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default TodoList;
