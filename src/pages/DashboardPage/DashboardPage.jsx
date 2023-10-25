
import { useState } from "react";


import { Header } from "components/Header/Header";
import { Task } from "components/Task/Task";
import { AddTaskBtn } from "components/AddTaskBtn/AddTaskBtn";

import s from './DashboardPage.module.css'

export default function DashboardPage(){
  const [tasks, setTasks] = useState([]);
    



  const addTask = () => {
   setTasks([...tasks, <Task/>])
    
  };

    return (

  <div>
    <Header/>
    <div className={s.Dashboard__taskSection}>
 {tasks.map(task => <Task/>)}
    </div>
   

      <AddTaskBtn addTask={addTask}/>
  </div>
      );
      
    }