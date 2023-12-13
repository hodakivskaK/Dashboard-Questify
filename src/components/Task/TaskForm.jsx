import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import {confirmCompleteCard } from "redux/cards/cardsOperation";

// style
import s from './TaskForm.module.css'

import { DeleteModal } from './DeleteModal/DeleteModal';
import difficulties from '../../data/difficulty'
import categories from '../../data/category'

// import icons
import { RiPencilFill } from "react-icons/ri";
import { AiFillStar } from 'react-icons/ai';
import { CgClose } from 'react-icons/cg';
import { FaCheck } from "react-icons/fa6";

// import image
import completed from 'img/award.png'

//component 
export const Task = ({card}) => {
  const [active, setActive] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(null);

  const dispatch = useDispatch();
  const taskId = nanoid();
  const modalContainer = document.getElementById(`${modalOpen}`);


  const confirmCard = (cardID) => {
    if(cardID){
      dispatch(confirmCompleteCard(cardID));
    }
  }
  

  const handleActive = () => {
    if(active){
      setActive(false);
      return;
    }
    setActive(true);
  }

    const deleteTask= ( taskId) => {
      setModalOpen(taskId);
      setShowModal(true);
    }

    return (
      
        <div className={s.task} id={taskId}>
        {card.status==="Complete"?
        <div>
          <p>Completed: 
            <span>{card.title}</span>
          </p>
         <img src={completed} alt="award"/>
        </div>:
        <div>
          <div className={s.task__top}>
  
          {
                (() => {
                  const matchedDifficulties = difficulties.find((difficulty) => difficulty.value === card.difficulty);
                  if (matchedDifficulties) {
                    return (
                      <div key={nanoid()} className={s.task__difficultyBox}> 
            <span className={s.task__difficultyPoint} style={{backgroundColor: matchedDifficulties.color}}></span>
            <p className={s.task__difficulty} >{card.difficulty}</p> </div>
                    );
                  }
                  return null;
                })()
          }
                  
            <AiFillStar className={s.task__favIcon}/>
          </div>   
          
          <p className={s.task__title}> {card.title} </p>
        
          <div className={s.task__dateBox}>
            <p className={s.task__date}>{card.date}</p>
            <p className={s.task__date}>{card.time}</p>
          </div>
  
            {
            (() => {
              const matchedCategory = categories.find((category) => category.value === card.category);
              if (matchedCategory) {
                return (
                  <p key={nanoid()} className={s.task__category} style={{ backgroundColor: matchedCategory.color }}>
                    {card.category}
                  </p>
                );
              }
              return null;
            })()
          }
        
        <div className={s.task__bottom}>
          <RiPencilFill className={s.task__btnUpdate} onClick={handleActive}/>
            <CgClose  className={s.task__btnClose} onClick={()=> deleteTask(taskId)}/>
            <FaCheck className={s.task__btnCompete} onClick={()=> confirmCard(card._id)}/>
        </div>
    
        {showModal && modalContainer && createPortal(<DeleteModal cardID={card._id} onClose={() => setShowModal(false)} />, modalContainer)}
        </div>
        }
       
      </div>
    );
  };