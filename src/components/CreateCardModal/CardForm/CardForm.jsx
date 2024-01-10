import { useState, useEffect } from 'react';

import s from './CardForm.module.css'
import Select from 'react-select';

import { levelsStyles, categoriesStyles } from '../../inputStyles';
import difficulties from 'data/difficulty'
import categories from 'data/category'
import { GoDotFill } from "react-icons/go";

export const CardForm = ({ sendTask, onClose }) => {
    const [title, setTitle] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [date, setDate] = useState('YYYY-MM-DD');
    const [time, setTime] = useState('HH:MM');
    const [category, setCategory] = useState('');
    const [isValid, setIsValid] = useState(false);


    useEffect(() => {
      setIsValid(category&&difficulty ? true : false);
    }, [category, difficulty]);

     // SUBMIT FORM
     const handleSubmit = (e) => {
      e.preventDefault();
      sendTask(difficulty, title, date, category, time);
      onClose();
    }
  
    // CHANGE FORM
    const handleChange = (e) => {
      if(e.currentTarget ===undefined){
        switch ( e.name) {
          case "difficulty":
            setDifficulty(e.value)
              break;
  
          case "category":
           setCategory(e.value)
          break;
         
        default:
        break;
        }
  
        return
      }
    
      if(e.currentTarget){
        const { name, value } = e.currentTarget 
  
        switch (name) {
            case "title":
              setTitle(value)
            break;
            case "date":
            const parts = value.split('T');
            setDate(parts[0])
            setTime(parts[1])
            break;
  
  
            default:
            break;
      }
    }    
    }
  
  
    return (
      <>
   
    <form action="" onSubmit={handleSubmit}>
  
  <div className={s.cardForm__difficultyBox}>
      <p className={s.cardForm__titleCategory}>Difficulty:</p>
      <Select
      className="basic-single"
      name="difficulty"
      options={difficulties}
      styles={levelsStyles}
      defaultValue={difficulties[1]}
      onChange={handleChange}
      />
      {!isValid && <GoDotFill className={s.cardForm__require}/>}
    </div>

   <div className={s.cardForm__inputBox}>
   <label htmlFor="title" className={s.cardForm__titleCenter}>Title:</label>     
   <input type="text" className={s.cardForm__inputName} name="title" onChange={handleChange}  required/>
    </div>
        
   <div className={s.cardForm__datePickerBox}>
        {date?<p>{date} {time}</p>:<label htmlFor="date">Date:</label>}
        <span className={s.cardForm__datepicker_toggle}>
        <span className={s.cardForm__datepicker_toggle_button}></span>
          <input name="date" type="datetime-local" className={s.cardForm__datepicker_input} onChange={handleChange}  required/>
        </span>
      </div>
 
  
   <div className={s.cardForm__categoryBox}>
   <p className={s.cardForm__titleCategory}>Category:</p>
   <Select
   className="basic-single"
   classNamePrefix="select"
   name="category"
   options={categories}
   styles={categoriesStyles}
   onChange={handleChange}
  />
  {!isValid && <GoDotFill className={s.cardForm__require}/>}
  </div>
  
   <div className={s.cardForm__bottom} >
   <button disabled={!isValid} type='submit' className={s.cardForm__btnSubmit}> START</button>
  </div>
        </form>
    
  </>
    );
  }