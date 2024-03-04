import { useAppSelector } from '../hooks';
import Task from './Task';
import TaskFilterBar from './TaskFilterBar';

function TaskList() {
  const { tasks, filteredTasks } = useAppSelector((state) => state.taskState);
  if (tasks.length === 0) return <h4>Your task list is empty.</h4>;
  const areNoTasksMatchingFilter = filteredTasks.length === 0;
  return (
    <section className='task-list'>
      {areNoTasksMatchingFilter ? (
        <span>No tasks match the selected filter.</span>
      ) : (
        <ul>
          {filteredTasks.map((task) => {
            return <Task key={task.id} task={task} />;
          })}
        </ul>
      )}

      <TaskFilterBar />
    </section>
  );
}
export default TaskList;
