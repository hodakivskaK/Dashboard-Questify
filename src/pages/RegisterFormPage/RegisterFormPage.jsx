import { NavLink, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';

import { useDispatch } from 'react-redux'
import { register } from "redux/auth/authOperation";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // toast styles


import s from './RegisterFormPage.module.css'

export default function RegisterFormPage(){
  const dispatch = useDispatch();
  const navigate = useNavigate();



 return <div className={s.registerForm__section}>
    <h1 className={s.registerForm__title}>Create your account</h1>
    <p className={s.registerForm__info}>Please don't use real e-mail, it's a pet project. </p>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        } else if (values.email.length <3) {
          errors.email = 'Your password should be at least 3 characters long';
        }


        if(!values.password) {
          errors.password = 'Required';
        } else if ( values.password.length <8 ) {
          errors.password = 'Your password should be at least 8 characters long';
        }

        return errors;
      }}

      onSubmit = { async (values, { resetForm }) => {
        const user = {
          email: values.email,
          password: values.password,
        };
        if (user.email !== '' && user.password !== '') {
          const res = await dispatch(register(user));
          if (res.meta.requestStatus === "fulfilled") {
            toast.success('Successful registration! Please confirm!');
            navigate('/login');
          }
          if (res?.status !== 201) {
            toast.error(res.payload);
          }
        }
      }}
    >

      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit} className={s.registerForm}>
          <label htmlFor="email" className={s.registerForm__label}>Email Address</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className={s.registerForm__input}
          />
          {errors.email && touched.email && errors.email}
          <label htmlFor="password" className={s.registerForm__label}>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            className={s.registerForm__input}
          />
          {errors.password && touched.password && errors.password}
           <label name="acceptedTerms" className={s.registerForm__termService}>
          
           <label htmlFor="checkbox" className={s.registerForm__checkboxLabel}>
             <input type="checkbox" className={s.registerForm__checkbox}/>
              By checking this box, you agree check my portfolio  :)
           </label>
         
       </label>
          
       {/* <NavLink type="submit" disabled={isSubmitting}  className={s.registerForm__submitBtn}  to="/login">
              Сontinue
        </NavLink> */}
          <button type="submit" disabled={isSubmitting} className={s.registerForm__submitBtn} >
            Сontinue
          </button>
        </form>
      )}
    </Formik>


    <p className={s.registerForm__account}>Already have an account? 
      <NavLink className={s.registerForm__accountLink} to={`/login`}>
      Sign in
      </NavLink> 
    </p>
  </div>

}

