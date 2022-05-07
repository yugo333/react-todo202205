import { useState, FC, ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { useCookies } from "react-cookie";
import { inCompleteState } from "../store/todoState";

export const InputTodos: FC = () => {
  // cookies
  const [cookies, setCookie] = useCookies(["InComplete", "Complete"]);

  const [todoText, setTodoText] = useState<string>("");

  // recoil
  const [inCompletes, setInCompletes] =
    useRecoilState<string[]>(inCompleteState);

  // event
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const onClick = () => {
    if (todoText === "") return;
    setInCompletes([...inCompletes, todoText]);
    setTodoText("");
    setCookie("InComplete", [...inCompletes, ...cookies.InComplete]);
  };

  return (
    <div className="text-center ">
      <input
        placeholder="Todo"
        type="text"
        value={todoText}
        onChange={onChange}
        className="rounded-l-lg shadow-md font-serif italic"
      />
      <button
        className="hover:bg-sky-400 w-14 rounded-r-lg shadow-md font-serif italic"
        onClick={onClick}
      >
        ADD
      </button>
    </div>
  );
};
