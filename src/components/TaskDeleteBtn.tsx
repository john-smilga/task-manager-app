import { BsTrash } from 'react-icons/bs';
import { useAppDispatch } from '../hooks';
import { deleteTask } from '../features/task/taskSlice';
function TaskDeleteBtn({ id }: { id: string }) {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(deleteTask(id));
  };
  return (
    <button
      type='button'
      className='delete-task'
      onClick={handleDelete}
      aria-label='delete task'
    >
      <BsTrash />
    </button>
  );
}
export default TaskDeleteBtn;
