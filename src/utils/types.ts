export type Task = {
  id: string;
  name: string;
  isCompleted: boolean;
};

export type TaskState = {
  tasks: Task[];
  filterValue: TaskFilterValue;
  filteredTasks: Task[];
};

export type TaskFilterValue = 'all' | 'active' | 'completed';
