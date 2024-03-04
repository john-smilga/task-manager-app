import { type Task } from '../utils/types';
import TaskCompletionToggle from './TaskCompletionToggle';
import TaskDeleteBtn from './TaskDeleteBtn';

function TaskComponent({ task }: { task: Task }) {
  return (
    <li className='task'>
      <TaskCompletionToggle id={task.id} isCompleted={task.isCompleted} />
      <span
        style={{
          textDecoration: task.isCompleted ? 'line-through' : 'none',
        }}
      >
        {task.name}
      </span>
      <TaskDeleteBtn id={task.id} />
    </li>
  );
}
export default TaskComponent;
