import { useSelector, useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'; 

import { logOut } from 'redux/auth/authOperation';
import authSelector from '../../redux/auth/authSelector'

import s from './Header.module.css'
import { FaTrophy } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { PiTargetBold } from "react-icons/pi";


export const Header = () => {
  const email = useSelector(authSelector.getUserEmail)
  const dispatch = useDispatch();
  const location = useLocation();
  
    return (
      <header className={s.header}>
        
        <div className={s.header__container}>
        <span className={s.header__logo}>Questify</span>
       
       <div>
        <img src="" alt="" />
            {email}
       </div>

      <div className={s.header__containerRight}>
            
            {location.pathname==="/completed"?
            <Link to="/dashboard" className={s.header__btnTaskCompleteBox}>
            <PiTargetBold   className={s.header__btnTaskComplete}/>
          </Link>
          :
          <Link to="/completed" className={s.header__btnTaskCompleteBox}>
            <FaTrophy className={s.header__btnTaskComplete}/>
          </Link>}
          
          

            <div className={s.header__btnLogOutBox} onClick={() => dispatch(logOut())}>
            <IoMdLogOut className={s.header__btnLogOut}/>

            </div>
       </div>
       </div>
 
      </header>
    );
  };
  