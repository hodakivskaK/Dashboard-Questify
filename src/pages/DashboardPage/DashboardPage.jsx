
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'


import { Header } from "components/Header/Header";
import { Task } from "components/Task/TaskForm";
import { AddTaskBtn } from "components/AddTaskBtn/AddTaskBtn";
import { addCard } from "../../redux/cards/cardsOperation";

import { fetchCard } from '../../redux/cards/cardsOperation'

// import { getCards } from 'redux/cards/cardsSelector'


import s from './DashboardPage.module.css'
import { nanoid } from "@reduxjs/toolkit";


// PAGE DashboardPage
export default function DashboardPage(){
  const [tasks, setTasks] = useState([]);

  // const cards = useSelector(getCards);

  const dispatch = useDispatch();

    useEffect(() => {
    dispatch(fetchCard())

      }, [dispatch])


  const addTask = () => {
   setTasks([...tasks, <Task/>])
  };


   const sendTask = (difficulty, title, date, category, time) => {
    dispatch(
      addCard({
          "title": title,
            "difficulty": difficulty,
            "category": category,
            "date": date,
            "time": time,
            "type": "Task"
          }
    ))
   };

    return (

  <div>
    <Header/>
    <div className={s.Dashboard__taskSection} >


 {tasks.map(task => <Task key={nanoid()} sendTask={sendTask} task={task}/>)}
    </div>
   

      <AddTaskBtn addTask={addTask}/>
  </div>
      );
      
    }