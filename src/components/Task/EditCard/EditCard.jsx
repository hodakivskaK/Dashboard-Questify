  import { useState } from 'react';

    import Select from 'react-select';
    import { editCard } from "redux/cards/cardsOperation";

import { useDispatch } from 'react-redux';
    import { levelsStyles, categoriesStyles } from './inputStyles';
    import difficulties from 'data/difficulty'
    import categories from 'data/category'

import s from './EditCard.module.css'
import { CgClose } from 'react-icons/cg';
import { FaCheck } from "react-icons/fa6";

export const EditCard = ({cardID, onClose}) => {   
        const [title, setTitle] = useState('');
        const [difficulty, setDifficulty] = useState('');
        const [date, setDate] = useState('YYYY-MM-DD');
        const [time, setTime] = useState('HH:MM');
        const [category, setCategory] = useState('');
        const dispatch = useDispatch();

         // SUBMIT FORM
         const handleSubmit = (e) => {
          e.preventDefault();
          dispatch(
            editCard({
              id: cardID,
              card: {
                title: title,
                difficulty: difficulty,
                category: category,
                date: date,
                time: time,
                type: "Task",
              },
            })
          );
          // onClose();
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
          
        <div className={s.modal__wrapper}>
        <div className={s.modal}>
        <form action="" onSubmit={handleSubmit}>
      
      <div className={s.cardForm__top}>
       <Select
       className="basic-single"
       name="difficulty"
       options={difficulties}
       styles={levelsStyles}
       defaultValue="ввввв"
       onChange={handleChange}
       required
      />
         </div>
    
       <div className={s.editForm__inputBox}>
       <label htmlFor="title" className={s.editForm__title}>EDIT QUEST:</label>     
       <input type="text" className={s.editForm__inputName} name="title" onChange={handleChange}  required/>
        </div>
            
       <div className={s.editForm__datePickerBox}>
            {date?<p className={s.editForm__datepickerEmpty}>{date} {time}</p>:<label htmlFor="date">Date:</label>}
            <span className={s.editForm__datepicker_toggle}>
            <span className={s.editForm__datepicker_toggle_button}></span>
              <input name="date" type="datetime-local" className={s.editForm__datepicker_input} onChange={handleChange}  required/>
            </span>
          </div>
     
      
     
       <Select
       className="basic-single"
       classNamePrefix="select"
       name="category"
       options={categories}
       styles={categoriesStyles}
       onChange={handleChange}
       required
      />
      
       <div className={s.editForm__bottom} >
       <CgClose  className={s.editForm__btnClose} onClick={onClose}/>
       <button type='submit' className={s.editForm__btnCompete}>
        <FaCheck  className={s.editForm__btnCompeteIcon} />
        </button>
      </div>
            </form>
        
      
      </div>
      </div>
        );
      }
    
  


