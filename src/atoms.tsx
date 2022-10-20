import { atom, selector } from "recoil";

/**
 * @description enum은 enumerated type(열거형)을 의미
 * @description 값들의 집합을 명명하고 이를 사용할 수 있음
 * @description string으로만 지정했을 경우 범위가 너무 넓음
 */
export enum Categories {
  "TODO" = "TODO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

/**
 * selector는 atom의 output을 변형시키는 도구
 * 즉 기존에 만들어 놓은 atom을 변화를 줄 수 있음
 */

export interface ITodo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TODO,
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
