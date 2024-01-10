
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';

import { Task } from '../Task/Task';
import { getCards } from 'redux/cards/cardsSelector';

import s from './TaskList.module.css';
import arrow from 'img/Arrow_3x.png'
import target from 'img/Taget_2.png'

export const TaskList = () => {
      const [cards, setCards] = useState([]);

      const dispatch = useDispatch();
      const location = useLocation();
      
      const tasks = useSelector(getCards);


    useEffect(() => {
      if(tasks.cards!==undefined){
        location.pathname === "/dashboard"?
        setCards(tasks.cards.filter(card => card.status === "Incomplete"))
        :setCards(tasks.cards.filter(card => card.status === "Complete"));
      }
        }, [dispatch, tasks, location.pathname]);

    return (
          cards.length===0?
          <div  className={s.taskList__emptyBox}>
            <h2 className={s.taskList__emptyTitle}> You don't have any Quest now</h2>
            <div className={s.taskList__imageBox}>
               <img src={target} alt="target"  className={s.taskList__imageTarget}/>
               <img src={arrow} alt="arrow"  className={s.taskList__imageArrow}/>
            </div>
          </div>
            :  
            <div className={s.taskList}> 
              {cards.map(card => <Task key={nanoid()}  card={card}/>)}
            </div>
  
    );
  };

