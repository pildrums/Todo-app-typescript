// import { useState } from "react";
import { useForm } from "react-hook-form";

interface IFormData {
  errors: {
    email: {
      message: string;
    };
  };
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

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
 * @description validation 방식 1. 정규식 사용
 * @description email 정규식: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
 */
const TodoList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<IFormData>();
  const onValid = (data: any) => {
    console.log(data);
  };

  // console.log(watch());
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Please, Check your email.",
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: "Email is invalid",
            },
          })}
          placeholder="Email"
        />
        <span>{errors.email?.message}</span>
        <input
          {...register("firstName", {
            required: "Please, Check your first name.",
          })}
          placeholder="First Name"
        />
        <span>{errors.firstName?.message}</span>
        <input
          {...register("lastName", {
            required: "Please, Check your last name",
          })}
          placeholder="Last Name"
        />
        <span>{errors.lastName?.message}</span>
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
        <span>{errors.username?.message}</span>
        <input
          {...register("password", {
            required: "Please, Check your password",
            minLength: {
              value: 6,
              message: "Password is too short.",
            },
            maxLength: {
              value: 12,
              message: "Password is too long.",
            },
            pattern: {
              value: /^[A-Za-z0-9]{6,12}$/,
              message: "Password is too short",
            },
          })}
          placeholder="Password"
          type="password"
        />
        <span>{errors.password && errors.password.message}</span>
        <input
          {...register("passwordConfirm", {
            required: "Password Confirmation is required.",
            validate: {
              matchesPreviousPassword: (value) => {
                const { password } = getValues();
                return password === value || "Password is not matched";
              },
            },
          })}
          placeholder="Password Confirmation"
          type="password"
        />
        <span>{errors.passwordConfirm && errors.passwordConfirm.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoList;
