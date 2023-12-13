import { BsFillPlusSquareFill } from 'react-icons/bs';
import s from './AddTaskBtn.module.css'


export const AddTaskBtn = ({onClick}) => {


    return (
     <button type='button' className={s.addTaskBtn} onClick={onClick}>
      <BsFillPlusSquareFill className={s.addTaskBtn__icon}/>
     </button>
    );
  };