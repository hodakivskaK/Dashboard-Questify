import Select from 'react-select';
import { AiFillStar } from 'react-icons/ai';
import { CgClose } from 'react-icons/cg';
// import { useDispatch } from 'react-redux'
import { useState } from 'react';

import s from './TaskForm.module.css'
import { levelsStyles } from './inputStyles';
import levels from '../../data/level'
import categories from '../../data/category'


//component 
export const Task = ({ sendTask, task}) => {
  const [title, setTitle] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [date, setDate] = useState('___-__-__');
  const [time, setTime] = useState('___:___');
  const [category, setCategory] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    sendTask(difficulty, title, date, category, time)   
  }

    const deleteTask= (id, e) => {
      console.log(e.currentTarget)
      // // dispatch(deleteCard(id));
    }


    return (

      
        <div className={s.task}>
        <form action="" onSubmit={handleSubmit}>

       <div className={s.task__top}>
                <Select
              className="basic-single"
              classNamePrefix="select"
              name="difficulty"
              options={levels}
              styles={levelsStyles}
              onChange={handleChange}
            />
          <AiFillStar className={s.task__favIcon}/>
        </div>   
        

        <input type="text" className={s.task__inputName} name="title" onChange={handleChange}  required/>

      <div className={s.task__datePickerBox}>
          {date?<p>{date} {time}</p>:<label htmlFor="date">Date:</label>}
          <span className={s.task__datepicker_toggle}>
          <span className={s.task__datepicker_toggle_button}></span>
            <input name="date" type="datetime-local" className={s.task__datepicker_input} onChange={handleChange}  required/>
          </span>
        </div>
  
      
      <Select
              className="basic-single"
              classNamePrefix="select"
              name="category"
              options={categories}
              styles={levelsStyles}
              onChange={handleChange}
            />

<div className={s.task__bottom} >
  <CgClose  className={s.task__btnClose} onClick={deleteTask}/>
  <button type='submit' className={s.task__btnSubmit}> START</button>
</div>

</form>
      </div>
    );
  };