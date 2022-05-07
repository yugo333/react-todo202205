import { atom } from "recoil";

export const inCompleteState = atom({
  key: "inComplete",
  default: [] as string[],
});

export const completeState = atom({
  key: "complete",
  default: [] as string[],
});
