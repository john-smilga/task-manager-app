import { useAppSelector } from '../hooks';
import RemoveCompletedBtn from './RemoveCompletedBtn';
import TaskFilterBtn from './TaskFilterBtn';

function pluralize(count: number, noun: string, suffix = 's') {
  return `${count} ${noun}${count !== 1 ? suffix : ''}`;
}

function TaskFilterBar() {
  const { filteredTasks } = useAppSelector((state) => state.taskState);

  return (
    <section className='tasklist-filters'>
      <span>{pluralize(filteredTasks.length, 'task')}</span>

      <div className='btn-container'>
        <TaskFilterBtn filterValue='all' />
        <TaskFilterBtn filterValue='active' />
        <TaskFilterBtn filterValue='completed' />
      </div>
      <RemoveCompletedBtn />
    </section>
  );
}
export default TaskFilterBar;
