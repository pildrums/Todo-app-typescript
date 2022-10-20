import { atom, selector } from "recoil";

type categories = "TODO" | "DOING" | "DONE";

/**
 * selector는 atom의 output을 변형시키는 도구
 * 즉 기존에 만들어 놓은 atom을 변화를 줄 수 있음
 */

export interface ITodo {
  text: string;
  id: number;
  category: categories;
}

export const categoryState = atom<categories>({
  key: "category",
  default: "TODO",
});

export const todoState = atom<ITodo[]>({
  key: "todo",
  default: [],
});

export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todos = get(todoState);
    const category = get(categoryState);
    return todos.filter((todo) => todo.category === category);
  },
});
