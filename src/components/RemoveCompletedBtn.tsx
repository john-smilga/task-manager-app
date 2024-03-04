import { deleteCompletedTasks } from '../features/task/taskSlice';
import { useAppDispatch } from '../hooks';
function RemoveCompletedBtn() {
  const dispatch = useAppDispatch();
  const handleRemoveCompleted = () => {
    dispatch(deleteCompletedTasks());
  };
  return (
    <button
      type='button'
      onClick={handleRemoveCompleted}
      className='filter-btn'
      aria-label='Clear completed tasks'
    >
      Clear Completed
    </button>
  );
}
export default RemoveCompletedBtn;
