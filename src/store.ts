import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/theme/themeSlice';
import taskSlice from './features/task/taskSlice';

export const store = configureStore({
  reducer: {
    themeState: themeReducer,
    taskState: taskSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
