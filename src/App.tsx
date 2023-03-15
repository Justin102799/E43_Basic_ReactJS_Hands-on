import {
  Fragment,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

type TodoItem = {
  id: number;
  task: string;
  status: boolean;
};

function App(){
  const[task, setTask] = useState("");

  const[todos, setTodos] = useState<TodoItem[]>([]);

  const finishedTasksCount = todos.filter((todo) => todo.status).length;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => 
    setTask(e.target.value);

  const onAddTodo = () => {
    setTodos((todos)=> [
      ...todos,
      { task, status: false, id: new Date().getTime() },
    ]);
    setTask("");
  };

  const water = () => {

  }
  water.bind

  const onDelete = (id: number) => () => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const onToggleTask = (id: number) => () => {
    setTodos((todos) =>
      todos.map((todo) => 
         todo.id === id? {...todo, status: !todo.status} : todo
      )
    );
  };

  return (
    <>
    <input type="text" value={task} onChange={onChange} />
    <button type="button" style={{backgroundColor: "green"}} onClick={onAddTodo}>
      Add Task
    </button>

    <p>Finished Task Counter {finishedTasksCount}</p>

    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input type="checkbox" checked={todo.status} onChange={onToggleTask(todo.id)}/>
        {todo.status ? <s>{todo.task}</s> : todo.task}
            <button className="" style={{backgroundColor: "red"}} onClick={onDelete(todo.id)}>Delete</button>{" "}
          
        </li>
       ))}
      </ul>
    </>
  )
}

export default App;