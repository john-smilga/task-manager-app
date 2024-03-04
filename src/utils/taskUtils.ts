import { Task } from './types';

export const retrieveTasksFromLocalStorage = (): Task[] => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
};

export const saveTasksToLocalStorage = (tasks: Task[]): void => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
