import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, todoSelector } from "../atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

function TodoList() {
  const todos = useRecoilValue(todoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FocusEvent<HTMLSelectElement>) => {
    // 현재 category의 타입은 string이지만, 실제로는 categories를 타입을 받아옴
    // 그래서 에러 발생!
    // 첫번째 sol은 event.currentTarget.value의 타입을 any로 지정해줘야 함(좋은 방식 아님)
    setCategory(event.currentTarget.value as any);
  };
  console.log(todos);
  return (
    <div>
      <h1>Todos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TODO}>Todo</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateTodo />
      {todos?.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
}

export default TodoList;
