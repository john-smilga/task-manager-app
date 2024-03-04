import { type TaskFilterValue } from '../utils/types';
import { useAppSelector, useAppDispatch } from '../hooks';
import { filterTasks } from '../features/task/taskSlice';

function TaskFilterBtn({ filterValue }: { filterValue: TaskFilterValue }) {
  const activeFilter = useAppSelector((state) => state.taskState.filterValue);
  const isActive = filterValue === activeFilter;
  const dispatch = useAppDispatch();
  const handleFilter = () => {
    dispatch(filterTasks(filterValue));
  };
  return (
    <button
      type='button'
      className={`filter-btn ${isActive ? 'active-btn' : ''}`}
      onClick={handleFilter}
      aria-pressed={isActive}
      aria-label={`Filter tasks by ${filterValue}`}
    >
      {filterValue}
    </button>
  );
}
export default TaskFilterBtn;
