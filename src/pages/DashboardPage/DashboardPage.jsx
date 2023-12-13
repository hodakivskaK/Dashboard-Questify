
import { useEffect, useState } from "react";
import { useDispatch, useSelector  } from 'react-redux'
import { createPortal } from 'react-dom';

import { Header } from "components/Header/Header";
import { AddTaskBtn } from "components/AddTaskBtn/AddTaskBtn";
import { TaskList } from "components/TaskList/TaskList";
import { ModalContent } from "components/ModalWindowFormTask/ModalWindowFormTask";
import Loader from "components/Loader/Loader";

import { fetchCard } from 'redux/cards/cardsOperation'
import { getIsLoading } from "redux/cards/cardsSelector";
import { addCard } from "redux/cards/cardsOperation";


// PAGE DashboardPage
export default function DashboardPage(){
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchCard())
      }, [dispatch])


      const openModal = () => {
        setShowModal(true)
        document.body.style.overflow = 'hidden'; 
      
      }

      const closeModal = () => {
        setShowModal(false)
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

      {showModal && createPortal(
        <ModalContent onClose={closeModal} sendTask={sendTask}/>,
        document.body
      )}
  </div>
      
    ) ;
}