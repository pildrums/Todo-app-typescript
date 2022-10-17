import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

interface IForm {
  todo: string;
}

interface ITodo {
  text: string;
  id: number;
  category: "TODO" | "DOING" | "DONE";
}

const todoState = atom<ITodo[]>({
  key: "todo",
  default: [],
});

function TodoList() {
  const [todos, setTodos] = useRecoilState(todoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ todo }: IForm) => {
    setTodos((prev) => [
      { text: todo, id: Date.now(), category: "TODO" },
      ...prev,
    ]);
    setValue("todo", "");
  };
  console.log(todos);
  return (
    <div>
      <h1>Todo</h1>
      <hr />
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("todo", { required: "Please write a todo." })}
          placeholder="Write a todo"
        />
        <button>Add</button>
      </form>
      <ul>
        {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
      </ul>
    </div>
  );
}

export default TodoList;
