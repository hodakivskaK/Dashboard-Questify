import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import {confirmCompleteCard } from "redux/cards/cardsOperation";

// style
import s from './Task.module.css'

import { DeleteModal } from './DeleteModal/DeleteModal';
import { EditCard } from './EditCard/EditCard';
import { CompletedTask } from './CompletedTask/CompletedTask';
import difficulties from '../../data/difficulty'
import categories from '../../data/category'

// import icons
import { RiPencilFill } from "react-icons/ri";
import { AiFillStar } from 'react-icons/ai';
import { CgClose } from 'react-icons/cg';
import { FaCheck } from "react-icons/fa6";



//COMPONENT
export const Task = ({card}) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(null);

  const dispatch = useDispatch();
  const taskId = nanoid();
  const modalContainer = document.getElementById(`${modalOpen}`);


  const confirmCard = (cardID) => {
    if(cardID){
      dispatch(confirmCompleteCard(cardID));
    }
  }
  

  const editTaskModal = (taskId) => {
      setModalOpen(taskId);
      setShowEditModal(true);
  }

  const deleteTaskModal= ( taskId) => {
      setModalOpen(taskId);
      setShowDeleteModal(true);
    }

    return (
      
        <div className={s.task} id={taskId}>
        {card.status==="Complete"?
       <CompletedTask title={card.title}/>:
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
            <RiPencilFill className={s.task__btnUpdate} onClick={()=>editTaskModal(taskId)}/>
            <CgClose  className={s.task__btnClose} onClick={()=> deleteTaskModal(taskId)}/>
            <FaCheck className={s.task__btnCompete} onClick={()=> confirmCard(card._id)}/>
        </div>
    
        {showDeleteModal && modalContainer && createPortal(<DeleteModal cardID={card._id} onClose={() => setShowDeleteModal(false)} />, modalContainer)}
        {showEditModal && modalContainer && createPortal(<EditCard cardID={card._id} onClose={() => setShowEditModal(false)} />, modalContainer)}
        </div>
        }
       
      </div>
    );
  };