
import { Link  } from 'react-router-dom'; 

import s from './LandingPage.module.css'

import { IoIosArrowRoundForward } from "react-icons/io";
import backgroundRow1 from '../../img/LangingPage/backgroundLanging1_2x.png'


export default function LandingPage(){

  return (<div className={s.landing__page}>
<div className={s.landing__section}>
    {/* <img src={backgroundRow1} alt="" className={s.landing__img} />
    <img src={backgroundRow1} alt="" className={s.landing__imgSecond} /> */}
    <h1 className={s.landing__title}>Questify</h1>

    <p className={s.landing__descrText}>Questify will turn your life into
            a thrilling game full of amazing
            quests and exciting challenges.</p>


    <div className={s.landing__formBox}>
                <div className={s.landing__form} > 
                    <div className={s.landing__box}>
                    <Link to="/login" replace className={s.landing__Btn}>Log into  
                        <IoIosArrowRoundForward className={s.landing__BtnIcon} />  
                    </Link>             
                    </div>    

                    <div className={s.landing__boxRegister}>
                        I am a new user <Link to="/registration" replace className={s.landing__linkRegister}>register </Link>
                    </div>
                    </div> 
    </div>
 </div>

 </div>
    );
    
  }