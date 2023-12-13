
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import { Task } from '../Task/TaskForm';
import { getCards } from 'redux/cards/cardsSelector';


import s from './TaskList.module.css';
import arrow from 'img/Arrow_3x.png'
import target from 'img/Taget_2.png'

export const TaskList = () => {
      const [cards, setCards] = useState([]);
    const dispatch = useDispatch();
    const tasks = useSelector(getCards);


    useEffect(() => {
      setCards(tasks.cards)
        }, [dispatch, tasks])

    return (
          cards.length===0&&!undefined?
          <div div className={s.taskList__emptyBox}>
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

