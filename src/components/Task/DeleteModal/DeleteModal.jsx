

import s from './DeleteModal.module.css'
import { useDispatch } from "react-redux";

import {  deleteCard } from "redux/cards/cardsOperation";

export const DeleteModal = ({ onClose, cardID }) => {
    const dispatch = useDispatch();
  
    const onDeleteContact = (cardID) => {
    if(cardID){
      dispatch(deleteCard(cardID));
    }
  }
  
    return (
      <>
      <div className={s.modal__background}/>
      <div className={s.modal__wrapper}>
        <div className={s.modal}>
       
          
         <h3 className={s.modal__title}>Delete this Quest?</h3>
         <div className={s.modal__btnBox}>
          <button className={s.modal__btnClose} onClick={onClose}>
              CANCEL
          </button>

          <button className={s.modal__btnDelete} onClick={() => onDeleteContact(cardID)}>
            DELETE          
          </button>
   
         </div>
        
        </div>
        </div>
  </>
    );
  }