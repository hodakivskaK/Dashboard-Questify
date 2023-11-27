import { useSelector, useDispatch } from 'react-redux'
import { IoMdLogOut } from "react-icons/io";
import { logOut } from 'redux/auth/authOperation';

import authSelector from '../../redux/auth/authSelector'
import s from './Header.module.css'

export const Header = () => {
  const email = useSelector(authSelector.getUserEmail)

  const dispatch = useDispatch();


    return (
      <div className={s.header}>
        
        <div className={s.header__container}>
        <span className={s.header__logo}>Questify</span>
       
       <div>
        <img src="" alt="" />
            {email}
       </div>

       <div className={s.header__btnLogOutBox} onClick={() => dispatch(logOut())}>
       <IoMdLogOut className={s.header__btnLogOut}/>

       </div>
       </div>
 
      </div>
    );
  };
  