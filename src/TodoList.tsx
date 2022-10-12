// import { useState } from "react";
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
 * @description form 안에 input 요소가 많을 경우에는 useState와 onChange, onSubmit 함수를 일일히 만들어주기 힘듦
 * @description useForm을 이용해서 기존의 useState와 onChange, onSubmit 함수를 대체함
 * @description register: form 안에 있는 각 입력란을 등록하는 함수
 * @description watch: 입력여부를 확인하는 함수 (현재 코드에서는 지움)
 * @description handleSubmit: form 요소에서 발생하는 submit 이벤트를 처리해주는 함수
 * @description formState: form 양식이 현재 어떤 상태인지를 담는 함수
 */
const TodoList = () => {
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  // console.log(watch());
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", { required: "Please, Check your email." })}
          placeholder="Email"
        />
        <input
          {...register("first_name", {
            required: "Please, Check your first name.",
          })}
          placeholder="First Name"
        />
        <input
          {...register("last_name", {
            required: "Please, Check your last name",
          })}
          placeholder="Last Name"
        />
        <input
          {...register("username", {
            required: "Please, Check your username",
            minLength: {
              value: 10,
              message: "Username is too short.",
            },
          })}
          placeholder="Username"
        />
        <input
          {...register("password", {
            required: "Please, Check your password",
            minLength: {
              value: 5,
              message: 'Password is too short'
            },
          })}
          placeholder="Password"
        />
        <input
          {...register("password_confirm", {
            required: "Password Confirmation is required.",
            minLength: {
              value: 5,
              message: "Password Confirmation is too short.",
            },
          })}
          placeholder="Password Confirmation"
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoList;
