import './index.scss'
import { MdModeEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import Modal from '../Modal/Modal';


const TaskList = () => {

  const [novaTask, setNovaTask] = useState("")
  const [task, setTask] = useState([
    {
      id: 1,
      title: "Exercicios",
      description: "Ir para academia fazer exercicios",
      completed: true,
    },
    {
      id: 2,
      title: "Limpar o carro",
      description: "Limpar o carro inteiro, de dentro pra fora",
      completed: false,
    },
  ])

  const [modalStatus, setModalStatus] = useState({
    isOpen: false,
    title: "",
    description: "",
    isConfirm: false,
    add: false,
    remove: false,
    id: "",
    edit: false
  })

  const addTask = () => {
    const newTask = [
      ...task,
      {
        id: Math.floor(Math.random() * 10000),
        title: novaTask,
        description: "",
        completed: true,
      }
    ]
    setNovaTask("")
    setTask(newTask)
  }

  const handleremove = (id) => {
    const newTask = [...task]
    const filteredTask = newTask.filter((todo) =>
      todo.id !== id ? todo : null)
    setTask(filteredTask)
    setModalStatus({ ...modalStatus, isOpen: false })
  }

  return (
    <main>
      <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
      <div className='container'>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Status</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            <div className='border'> 

            </div>
            {task.map((tarefa) => (
              <tr key={tarefa.id}>
                <td className='title'>{tarefa.title}</td>
                <td>
                  <input className='checkbox' type="checkbox" />
                </td>
                <td >
                  <MdModeEdit size={30} id='editBtn'
                    onClick={() => {
                      setModalStatus({
                        isOpen: true,
                        title: "Deseja editar esse item?",
                        description: tarefa.title,
                        edit: true
                      })
                    }}
                  />
                  <FaTrash
                    size={25} id='closeBtn'
                    onClick={() => {
                      setModalStatus({
                        isOpen: true,
                        title: "Deseja excluir esse item?",
                        description: tarefa.title,
                        add: false,
                        id: tarefa.id
                      })
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {modalStatus.isOpen && (
          <Modal
            isDelete={() => {
              handleremove(modalStatus.id)
              setModalStatus({ ...modalStatus, isOpen: false, remove: true })
            }}
            remove={modalStatus.remove}
            edit={modalStatus.edit}
            add={modalStatus.add}
            isOpen={modalStatus.isOpen}
            isClose={() => setModalStatus({ ...modalStatus, isOpen: false, add: false, remove: false })}
            title={modalStatus.title}
            description={modalStatus.description}
            isConfirm={() => {
              addTask()
              setModalStatus({ ...modalStatus, isOpen: false, })
            }}
          />
        )}
        <div className='input-task'>
          <input
            type="text"
            value={novaTask}
            onChange={(e) => setNovaTask(e.target.value)}
            placeholder="Nova Tarefa..."
          />
          <FaPlus id='btnAdd'
            size={20}
            onClick={() => {
              setModalStatus({
                isOpen: true,
                title: "Deseja adicionar esse item?",
                description: novaTask,
                add: true
              })
            }}
          />
        </div>
      </div>
    </main>
  )
}

export default TaskList