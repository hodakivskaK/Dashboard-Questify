

import s from './LandingPage.module.css'


export default function LandingPage(){
   
    
  return (
<div className={s.landing__section}>
    <h1 className={s.landing__title}>Questify</h1>

    <p className={s.landing__descrText}>Questify will turn your life into
a thrilling game full of amazing
quests and exciting challenges.</p>


<div className={s.landing__formBox}>
    <form className={s.landing__form}> 
        <label className={s.landing__label}>
        Choose your name to sign up or log in
            <input type="text" className={s.landing__input} />
        </label>
    </form>

    <button className={s.landing__Btn}>go!</button>
</div>


</div>
    );
    
  }