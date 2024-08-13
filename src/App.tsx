import { PlusCircle } from '@phosphor-icons/react'
import { Header } from './components/header'
import { useState } from 'react'
import { TaskItem } from './components/task-item'
import { TaskEdit01Icon } from './components/icons/clipboard'

export function App() {
  const [taskList, setTaskList] = useState<
    {
      id: number
      content: string
      isDone: boolean
    }[]
  >([])
  const [newTask, setNewTask] = useState('')
  // const [tasksDone, setTasksDone] = useState(0)
  // const [isTaskDone, setIsTaskDone] = useState(false)

  function handleAddNewTask(event: any) {
    event.preventDefault()

    const newTaskItem = {
      id: taskList.length + 1,
      content: newTask,
      isDone: false,
    }
    setTaskList([...taskList, newTaskItem])
    setNewTask('')
  }

  function handleNewTaskChange(event: any) {
    setNewTask(event.target.value)
  }

  // deleta um item, retornando a lista de tarefas sem o item deletado
  function deleteTask(taskToDeleteId: number) {
    const taskListWithoutDeleted = taskList.filter(
      (task) => task.id !== taskToDeleteId,
    )
    setTaskList(taskListWithoutDeleted)
  }

  function toggleTask(taskToCheckId: number) {
    const updatedTaskList = taskList.map((task) => {
      if (task.id === taskToCheckId) {
        return { ...task, isDone: !task.isDone }
      }
      return task
    })
    setTaskList(updatedTaskList)
  }

  // CÓDIGO ERRADO
  // function toggleTask() {
  //   setIsTaskDone(!isTaskDone)
  //   if (isTaskDone === false) {
  //     setTasksDone(tasksDone + 1)
  //   } else {
  //     setTasksDone(tasksDone - 1)
  //   }
  // }

  // CÓDIGO CORRIGIDO (ChatGPT)
  const tasksDone = taskList.filter((task) => task.isDone).length

  return (
    <>
      <Header />
      <main className='mx-auto max-w-[736px] space-y-16'>
        <form
          className='-mt-[27px] flex items-center gap-2'
          onSubmit={handleAddNewTask}
        >
          <input
            type='text'
            className='flex-1 rounded-lg border border-gray-700 bg-gray-500 p-4 text-gray-100 placeholder-gray-300 caret-gray-100 outline-none focus:border-purple-dark'
            placeholder='Adicione uma nova tarefa'
            onChange={handleNewTaskChange}
            value={newTask}
          />
          <button
            type='submit'
            className='transition-color flex items-center gap-2 rounded-lg bg-blue-dark p-4 text-sm font-bold text-gray-100 hover:bg-blue-light'
          >
            Criar <PlusCircle size={16} />
          </button>
        </form>
        <section className='space-y-6'>
          <div className='flex justify-between'>
            <span className='space-x-2'>
              <strong className='text-sm text-blue-light'>
                Tarefas criadas
              </strong>
              <span className='rounded-full bg-gray-400 px-2 py-[0.125rem] text-xs font-bold text-gray-200'>
                {taskList.length}
              </span>
            </span>
            <span className='space-x-2'>
              <strong className='text-sm text-purple-light'>Concluídas</strong>
              <span className='rounded-full bg-gray-400 px-2 py-[0.125rem] text-xs font-bold text-gray-200'>
                {tasksDone} de {taskList.length}
              </span>
            </span>
          </div>
          {taskList.length === 0 ? (
            <div className='flex flex-col items-center justify-center gap-4 p-16'>
              <TaskEdit01Icon className='size-14 fill-none text-gray-400' />
              <div>
                <strong className='block text-gray-300'>
                  Você ainda não tem tarefas cadastradas
                </strong>
                <span className='text-gray-300'>
                  Crie tarefas e organize seus itens a fazer
                </span>
              </div>
            </div>
          ) : (
            <div className='space-y-3'>
              {taskList.map((task) => {
                return (
                  <TaskItem
                    key={task.id}
                    id={task.id}
                    content={task.content}
                    isDone={task.isDone}
                    onDeleteTask={deleteTask}
                    onToggleTask={toggleTask}
                  />
                )
              })}
            </div>
          )}
        </section>
      </main>
    </>
  )
}
