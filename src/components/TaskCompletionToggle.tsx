import { useAppDispatch } from '../hooks';
import { toggleTaskCompletion } from '../features/task/taskSlice';
function TaskCompletionToggleInput({
  isCompleted,
  id,
}: {
  isCompleted: boolean;
  id: string;
}) {
  const dispatch = useAppDispatch();

  const handleToggleCompleted = () => {
    dispatch(toggleTaskCompletion(id));
  };

  return (
    <input
      type='checkbox'
      className='task-toggle'
      checked={isCompleted}
      onChange={handleToggleCompleted}
      aria-label={
        isCompleted ? 'Mark task as incomplete' : 'Mark task as complete'
      }
    />
  );
}

export default TaskCompletionToggleInput;
