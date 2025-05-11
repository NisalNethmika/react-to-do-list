import React from 'react'
import todo_icon from '../assets/todo_icon.png'
import Task from './Task';

function Todo(){
    const [taskList, setTaskList] = React.useState([]);
    const inputref = React.useRef(null);

    function addTask(){
        const newTaskText = inputref.current.value.trim();
        console.log(newTaskText);
        if(newTaskText === "") return;

        const newTask = {
            id: taskList.length + 1,
            text: newTaskText,
            completed: false
        }
        setTaskList([...taskList, newTask]);
        inputref.current.value = "";
    }

    function deleteTask(id){
        const newTaskList = taskList.filter(prevTask => prevTask.id !== id);
        setTaskList(newTaskList);   
    }

    function toggleTask(id){
        const newTaskList = taskList.map(task => {
            if(task.id === id){
                task.completed = !task.completed;
            }
            return task;
        });
        setTaskList(newTaskList);
    }

    return (
        <div className='container bg-gray-100 mx-auto  p-5 rounded-lg shadow-md max-w-md min-h-[500px]'>
            
            {/* Header Section */}
            <div className="flex items-center gap-2" >
                <img className='w-8' src={todo_icon} alt="" />
                <h1 className='text-2xl font-semibold'>To Do List</h1>
            </div>

            {/* Input Section */}
            <div className="flex items-center gap-2 mt-5">
                <input type="text" ref={inputref} className='border border-gray-300 rounded-md p-2 w-full' placeholder='Add a new task' />
                <button onClick={addTask} className='bg-orange-500 text-white px-4 py-2 rounded-md cursor-pointer'>Add</button>
            </div>

            {/* To do items Section */}
            <div className='bg-gray-200 flex flex-col gap-2 my-3 px-2 rounded-md'>
                {taskList.map((task) => (
                    <Task key={task.id} id={task.id} text={task.text} completed={task.completed} deleteFunction={deleteTask} toggleFunction={toggleTask}/>
                ))}
                
            </div>
            
        </div>
      )
}

export default Todo;
