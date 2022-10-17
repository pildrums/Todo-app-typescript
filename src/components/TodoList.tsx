import { useForm } from "react-hook-form";

interface IForm {
  todo: string;
}

export function TodoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    console.log("add todo", data.todo);
    setValue("todo", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("todo", { required: "Please write a todo." })}
          placeholder="Write a todo"
        />
      </form>
    </div>
  );
}
