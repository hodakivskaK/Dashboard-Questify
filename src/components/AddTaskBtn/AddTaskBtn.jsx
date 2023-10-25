import { BsFillPlusSquareFill } from 'react-icons/bs';
import s from './AddTaskBtn.module.css'


export const AddTaskBtn = ({addTask}) => {


    return (
     <button type='button' className={s.addTaskBtn} onClick={addTask}>
      <BsFillPlusSquareFill className={s.addTaskBtn__icon}/>
     </button>
    );
  };