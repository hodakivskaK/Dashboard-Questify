
import s from './CompletedTask.module.css'
// import image
import completed from 'img/award_3x.png'

export const CompletedTask = ({title}) => {

    function shortTitle() {
        if (title.length > 13) {
            return title.substring(0, 13) + "...";
        } else {
            return title;
        }
    }
   
    return (
        <div className={s.completedTask_card}>
        <div className={s.completedTask_textBox}>
                <p className={s.completedTask_CompletedTitle}>COMPLETED:</p>
                <span className={s.completedTask_title}>{shortTitle()}</span>
        </div>
        <img src={completed} alt="award" className={s.completedTask_img}/>
        </div>
    );
  }


