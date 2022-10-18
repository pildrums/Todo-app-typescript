import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { todoState } from "./atoms";

interface IForm {
  todo: string;
}

function CreateTodo() {
  const setTodos = useSetRecoilState(todoState)
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ todo }: IForm) => {
    setTodos((prev) => [
      { text: todo, id: Date.now(), category: "TODO" },
      ...prev,
    ]);
    setValue("todo", "");
  };
  // console.log(todos);
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("todo", { required: "Please write a todo." })}
        placeholder="Write a todo"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateTodo;
