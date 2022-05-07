import { SetterOrUpdater } from "recoil";

export const deleteState = (
  states: string[],
  setStates: SetterOrUpdater<string[]>,
  index: number
): string[] => {
  const newState = [...states];
  newState.splice(index, 1);
  setStates(newState);

  return newState;
};
