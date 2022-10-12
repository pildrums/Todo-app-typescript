import { useState } from "react";
import { useForm } from "react-hook-form";

/**
 * @description 기존의 useState를 이용해서 form과 input을 다룸 (Legacy)
 * @todo React-Hook-Form을 이용해서 좀 더 단순하게 form을 다뤄야 함. (Done)
 * @returns TodoList Component
 */
// const TodoList = () => {
//   const [todo, setTodo] = useState("");
//   const [todoError, setTodoError] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setTodoError("");
//     setTodo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (todo.length < 10) {
//       return setTodoError("Todo should be longer");
//     }
//     console.log("submit");
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={todo} placeholder="Write a todo" />
//         <button>Add</button>
//         {todoError !== "" ? todoError : null}
//       </form>
//     </div>
//   );
// };
/**
 * @description useForm을 이용해서 기존의 useState와 onChange, onSubmit 함수를 대체함.
 */
const TodoList = () => {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        <input {...register("email")} placeholder="Email" />
        <input {...register("first_name")} placeholder="First Name" />
        <input {...register("last_name")} placeholder="Last Name" />
        <input {...register("username")} placeholder="Username" />
        <input {...register("password")} placeholder="Password" />
        <input {...register("password_confirm")} placeholder="Password Confirm" />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoList;
