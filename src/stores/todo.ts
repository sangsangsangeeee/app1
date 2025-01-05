import {atom, useAtom, useAtomValue, useSetAtom} from 'jotai';

export type Todo = {
  exp: string;
  title: string;
  description?: string;
};

export const todoAtom = atom<Todo[]>([]);

export const useTodoAtom = () => useAtom(todoAtom);
export const useGetTodo = () => useAtomValue(todoAtom);
export const useSetTodo = () => useSetAtom(todoAtom);
