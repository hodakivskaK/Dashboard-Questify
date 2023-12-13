
import { Link, useNavigate } from 'react-router-dom'; 

import s from './LandingPage.module.css'

import { IoIosArrowRoundForward } from "react-icons/io";


export default function LandingPage(){
    const navigate = useNavigate();


    const handleSubmit = e => {
        e.preventDefault();
     navigate('/registration');
      };
    
  return (
<div className={s.landing__section}>
    <h1 className={s.landing__title}>Questify</h1>

    <p className={s.landing__descrText}>Questify will turn your life into
            a thrilling game full of amazing
            quests and exciting challenges.</p>


    <div className={s.landing__formBox}>
                <div className={s.landing__form} onSubmit={handleSubmit}> 
                    <div className={s.landing__boxRegister}>
                        I am a new user <Link to="/registration" replace className={s.landing__linkRegister}>register </Link>
                    </div>

                    <div className={s.landing__box}>
                
                    <Link to="/login" replace className={s.landing__Btn}>Log into  
                        <IoIosArrowRoundForward className={s.landing__BtnIcon} />  
                    </Link>
                   
                    </div>    
                    </div> 
    </div>
 </div>
    );
    
  }