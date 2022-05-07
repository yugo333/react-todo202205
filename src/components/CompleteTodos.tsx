import { FC, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRecoilState } from "recoil";
import { deleteState } from "../hooks/deleteState";
import { completeState, inCompleteState } from "../store/todoState";

export const CompleteTodos: FC = () => {
  // cookies
  const [cookies, setCookie] = useCookies(["InComplete", "Complete"]);

  // recoil
  const [inComplete, setInComplete] = useRecoilState<string[]>(inCompleteState);
  const [complete, setComplete] = useRecoilState<string[]>(completeState);

  useEffect(() => {
    if (cookies.Complete === undefined) return;
    setComplete([...cookies.Complete]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // event
  const onClickDelete = (index: number) => {
    const newComplete = deleteState(complete, setComplete, index);
    setCookie("Complete", newComplete);
  };

  const onClickBack = (Text: string, index: number) => {
    setInComplete([...inComplete, Text]);
    const newComplete = deleteState(complete, setComplete, index);
    setCookie("InComplete", [...inComplete, Text]);
    setCookie("Complete", newComplete);
  };

  return (
    <div className="text-center p-4 shadow-lg">
      <div className="text-gray-400 font-serif italic">complete tasks!!!</div>
      {complete.map((Text, index) => {
        return (
          <div key={index} className="m-4 shadow-md font-serif italic">
            {Text}
            <button
              className="ml-2 rounded w-14 bg-green-200 hover:bg-green-400 font-serif italic"
              onClick={() => onClickBack(Text, index)}
            >
              戻す
            </button>
            <button
              className="ml-2 rounded w-14 bg-red-200 hover:bg-red-400 font-serif italic"
              onClick={() => onClickDelete(index)}
            >
              削除
            </button>
          </div>
        );
      })}
    </div>
  );
};
