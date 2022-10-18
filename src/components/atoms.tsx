import { atom, selector } from "recoil";

/**
 * selector는 atom의 output을 변형시키는 도구
 * 즉 기존에 만들어 놓은 atom을 변화를 줄 수 있음
 */

export interface ITodo {
  text: string;
  id: number;
  category: "TODO" | "DOING" | "DONE";
}

export const todoState = atom<ITodo[]>({
  key: "todo",
  default: [],
});

export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todos = get(todoState);
    return [
      todos.filter((todo) => todo.category === "TODO"),
      todos.filter((todo) => todo.category === "DOING"),
      todos.filter((todo) => todo.category === "DONE"),
    ];
  },
});
