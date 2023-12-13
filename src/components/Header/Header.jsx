import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'; 

import { logOut } from 'redux/auth/authOperation';
import authSelector from '../../redux/auth/authSelector'

import s from './Header.module.css'
import { FaTrophy } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";

export const Header = () => {
  const email = useSelector(authSelector.getUserEmail)
  const dispatch = useDispatch();

    return (
      <header className={s.header}>
        
        <div className={s.header__container}>
        <span className={s.header__logo}>Questify</span>
       
       <div>
        <img src="" alt="" />
            {email}
       </div>

      <div className={s.header__containerRight}>
            
            <NavLink to="/dashboard/complete" className={s.header__btnTaskCompleteBox}>
              <FaTrophy className={s.header__btnTaskComplete}/>
            </NavLink>
            
            <div className={s.header__btnLogOutBox} onClick={() => dispatch(logOut())}>
            <IoMdLogOut className={s.header__btnLogOut}/>

            </div>
       </div>
       </div>
 
      </header>
    );
  };
  