// import { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  passwordConfirm: string;
  extraError?: string;
}

/**
 * @description form 안에 input 요소가 많을 경우에는 useState와 onChange, onSubmit 함수를 일일히 만들어주기 힘듦
 * @description useForm을 이용해서 기존의 useState와 onChange, onSubmit 함수를 대체함
 * @description register: form 안에 있는 각 입력란을 등록하는 함수
 * @description watch: 입력여부를 확인하는 함수 (현재 코드에서는 지움)
 * @description handleSubmit: form 요소에서 발생하는 submit 이벤트를 처리해주는 함수
 * @description formState: form 양식이 현재 어떤 상태인지를 담는 함수
 * @description validation 방식 1. 정규식 사용
 * @description email 정규식: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
 * @description 기존의 useState를 이용해서 form과 input을 다룸 (Legacy)
 * @todo React-Hook-Form을 이용해서 좀 더 단순하게 form을 다뤄야 함. (Done)
 * @returns TodoList Component
 */
const TodoList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.passwordConfirm) {
      setError(
        "passwordConfirm",
        { message: "Password is not matched" },
        { shouldFocus: true }
      );
    }
    // setError("extraError", { message: "Server is offline." });
  };
  console.log(errors);

  // console.log(watch());
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors.email?.message}</span>
        <input
          {...register("firstName", {
            required: "write here",
            validate: {
              noNico: (value) =>
                !value.includes("nico") ? "no nico allowed" : true,
              noNick: (value) =>
                !value.includes("nick") ? "no nick allowed" : true,
            },
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
              message: "Password is too short",
            },
          })}
          placeholder="Password"
        />
        <span>{errors.password?.message}</span>
        <input
          {...register("passwordConfirm", {
            required: "Password Confirmation is required.",
            minLength: {
              value: 6,
              message: "Password Confirmation is too short.",
            },
          })}
          placeholder="Password Confirmation"
        />
        <span>{errors.passwordConfirm?.message}</span>
        <button>Add</button>
        <span>{errors.extraError?.message}</span>
      </form>
    </div>
  );
};

export default TodoList;
