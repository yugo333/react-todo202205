import { FC, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useCookies } from "react-cookie";
import { deleteState } from "../hooks/deleteState";
import { completeState, inCompleteState } from "../store/todoState";

export const InCompleteTodos: FC = () => {
  // cookies
  const [cookies, setCookie] = useCookies(["InComplete", "Complete"]);

  // recoil
  const [inComplete, setInComplete] = useRecoilState<string[]>(inCompleteState);
  const [complete, setComplete] = useRecoilState<string[]>(completeState);

  useEffect(() => {
    if (cookies.InComplete === undefined) return;
    setInComplete([...cookies.InComplete]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // event
  const onClickDelete = (index: number) => {
    const newInComplete = deleteState(inComplete, setInComplete, index);
    setCookie("InComplete", newInComplete);
  };

  const onClickComplete = (Text: string, index: number) => {
    setComplete([...complete, Text]);
    const newInComplete = deleteState(inComplete, setInComplete, index);

    setCookie("Complete", [...complete, Text]);
    setCookie("InComplete", newInComplete);
    console.log();
  };

  return (
    <div className="text-center p-4 shadow-lg">
      <div className="text-gray-400 font-serif italic">in complete tasks</div>
      {inComplete.map((Text, index) => {
        return (
          <div key={index} className="m-4 shadow-md font-serif italic">
            {Text}
            <button
              className="ml-2 rounded w-14 bg-green-200 hover:bg-green-400 font-serif italic"
              onClick={() => onClickComplete(Text, index)}
            >
              終了
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
