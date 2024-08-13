import { CircleIcon } from './icons/circle'
import { CheckmarkCircle02Icon } from './icons/check'
import { Delete02Icon } from './icons/trash'

export interface TaskItemProps {
  id: number
  content: string
  isDone: boolean
  onDeleteTask: (id: number) => void
  onToggleTask: (id: number) => void
}

export function TaskItem({
  id,
  content,
  isDone,
  onDeleteTask,
  onToggleTask,
}: TaskItemProps) {
  // const [isTaskDone, setIsTaskDone] = useState(false)

  // function handleToggleTask() {
  //   setIsTaskDone(!isTaskDone)
  //   onToggleTask()
  // }

  // function handleDeleteTask() {
  //   onDeleteTask(content)
  // }

  return !isDone ? (
    <div className='flex items-start gap-3 rounded-lg border border-gray-400 bg-gray-500 p-4 text-sm text-gray-100'>
      <button onClick={() => onToggleTask(id)}>
        <CircleIcon className='size-5 rounded-full fill-none text-blue-light hover:fill-blue-dark/20' />
      </button>
      <span className='flex-1'>{content}</span>
      <button onClick={() => onDeleteTask(id)}>
        <Delete02Icon className='size-6 shrink-0 rounded fill-none p-1 text-gray-300 transition-colors hover:bg-gray-400 hover:text-danger' />
      </button>
    </div>
  ) : (
    <div className='flex items-start gap-3 rounded-lg border border-gray-500 bg-gray-500 p-4 text-sm text-gray-100'>
      <button onClick={() => onToggleTask(id)}>
        <CheckmarkCircle02Icon className='size-5 fill-purple-dark text-purple-dark hover:fill-purple-light hover:text-purple-light' />
      </button>
      <span className='flex-1 text-gray-300 line-through'>{content}</span>
      <button onClick={() => onDeleteTask(id)}>
        <Delete02Icon className='size-6 shrink-0 rounded fill-none p-1 text-gray-300 transition-colors hover:bg-gray-400 hover:text-danger' />
      </button>
    </div>
  )
}
