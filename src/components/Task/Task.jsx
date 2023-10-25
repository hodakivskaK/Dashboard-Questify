import Select from 'react-select';
import { AiFillStar } from 'react-icons/ai';
import { CgClose } from 'react-icons/cg';

import s from './Task.module.css'
import { levelsStyles } from './inputStyles';
import levels from '../../data/level'
import categories from '../../data/category'

export const Task = () => {

  const handleSubmit = (e) => {
    console.log(true)
    e.preventDefault();
  }

  
    const closeTask = () => {
      console.log(false)

    }

    return (
        <div className={s.task}>
        <form action="" onSubmit={handleSubmit}>

       <div className={s.task__top}>
                <Select
              className="basic-single"
              classNamePrefix="select"
              name="level"
              options={levels}
              styles={levelsStyles}
            />

          <AiFillStar className={s.task__favIcon}/>
        </div>   
        

        <input type="text" className={s.task__inputName}/>

      <input type="date" name="" id="" />

      <Select
              className="basic-single"
              classNamePrefix="select"
              name="level"
              options={categories}
              styles={levelsStyles}
            />

<div className={s.task__bottom}>
  <CgClose  className={s.task__btnClose} onClick={closeTask}/>
  <button type='submit' className={s.task__btnSubmit} >START</button>
</div>

</form>
      </div>
    );
  };