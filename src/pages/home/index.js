import { Container } from "./styled";
import {Plus} from "phosphor-react";
import {XCircle} from "phosphor-react";
import { useState } from "react";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Home(){

    const[task, setTask] = useState("");

    const[tasks, setTasks] = useState([]);

    function handleCreateTask(){
        if(task == ""){
            toast.error("Digite alguma task")
        }else{
            const idRandom = (num) => Math.floor(Math.random() *num);
            const newTask = {id: idRandom(12043) , content: task, isComplete: false}

            setTasks([...tasks, newTask]);
            setTask("");
        }
    }

    function handleToggleTaskCompletion(id){
        const taskComplete = tasks.map(task => {
            if(task.id === id){
                return {...task, isComplete: !task.isComplete}
            }
            return task
        }) 
    
        setTasks(taskComplete)
        console.log(task)
    }

    function handleDeleteTask(id){
        setTasks(tasks.filter(remove => remove.id !== id))
    }

    return (     
        <div>
            <ToastContainer/>
            <Container className="container">
                <header>
                    <h1>O que temos para hoje?</h1>
                    <div className="todo">
                        
                        <input className="input-todo" type="text" value={task} onChange={(ev) => setTask(ev.target.value)}/>

                        <button><Plus size={32} onClick={handleCreateTask} /></button>
                    </div>
                    
                </header>

            </Container>
            {tasks.map(task => (

                <div key={task.id} className={task.isComplete ? 'task-box completed' : 'task-box'} >
                <label className="checkbox-container">
                    <input className="input-task" type="checkbox" onClick={() => handleToggleTaskCompletion(task.id)} />
                    <span className="checkmark"></span>

                    <p>{task.content}</p>
                    
                </label>
                <div className="button-remove"><XCircle size={32} onClick={()=> handleDeleteTask(task.id)} /></div>
        </div>
            ))}
            
        </div>
    )
}