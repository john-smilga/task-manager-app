import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  type Task,
  type TaskState,
  type TaskFilterValue,
} from '../../utils/types';
import {
  retrieveTasksFromLocalStorage,
  saveTasksToLocalStorage,
} from '../../utils/taskUtils';
import toast from 'react-hot-toast';

const initialState: TaskState = {
  tasks: retrieveTasksFromLocalStorage(),
  filteredTasks: retrieveTasksFromLocalStorage(),
  filterValue: 'all',
};
const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
      taskSlice.caseReducers.saveTasks(state);
      toast.success('Task created');
    },
    toggleTaskCompletion: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
        taskSlice.caseReducers.saveTasks(state);
        toast.success('Task updated');
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      taskSlice.caseReducers.saveTasks(state);

      toast.error('Task removed');
    },
    filterTasks: (state, action: PayloadAction<TaskFilterValue>) => {
      state.filterValue = action.payload;
      switch (action.payload) {
        case 'active':
          state.filteredTasks = state.tasks.filter((task) => !task.isCompleted);
          break;
        case 'completed':
          state.filteredTasks = state.tasks.filter((task) => task.isCompleted);
          break;
        case 'all':
          state.filteredTasks = state.tasks;
          break;
        default:
          const unexpectedValue: never = action.payload;
          throw new Error(`Unexpected value: ${unexpectedValue}`);
      }
    },
    deleteCompletedTasks: (state) => {
      state.tasks = state.tasks.filter((task) => !task.isCompleted);
      state.filterValue = 'all';
      taskSlice.caseReducers.saveTasks(state);
      toast.error('Completed tasks removed');
    },
    saveTasks: (state) => {
      state.filteredTasks = state.tasks;
      saveTasksToLocalStorage(state.tasks);
    },
  },
});

export const {
  addTask,
  toggleTaskCompletion,
  deleteTask,
  filterTasks,
  deleteCompletedTasks,
} = taskSlice.actions;

export default taskSlice.reducer;
