
import { useEffect, useState } from "react";
import { useDispatch, useSelector  } from 'react-redux'
import { createPortal } from 'react-dom';

import { Header } from "components/Header/Header";
import { AddTaskBtn } from "components/AddTaskBtn/AddTaskBtn";
import { TaskList } from "components/TaskList/TaskList";
import { NewTaskModal } from "components/CreateCardModal/NewTaskModal";
import Loader from "components/Loader/Loader";

import { fetchCard } from 'redux/cards/cardsOperation'
import { getIsLoading } from "redux/cards/cardsSelector";
import { addCard } from "redux/cards/cardsOperation";



// PAGE DashboardPage
export default function DashboardPage(){
  const [showModalNewTask, setShowModalNewTask] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  
  useEffect(() => {
    dispatch(fetchCard())
      }, [dispatch])


      const openModal = () => {
        setShowModalNewTask(true)
        document.body.style.overflow = 'hidden'; 
      
      }

      const closeModal = () => {
        setShowModalNewTask(false)
        document.body.style.overflow = '';
      }


           // ADD NEW TASK
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
      <div >
    <Header/>
      {isLoading?<Loader/>: <TaskList /> }

      <AddTaskBtn onClick={openModal}/>

      {showModalNewTask && createPortal(
        <NewTaskModal isOpen={showModalNewTask} onClose={closeModal} sendTask={sendTask}/>,
        document.body
      )}
  </div>
      
    ) ;
}