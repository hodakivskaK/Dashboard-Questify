import { Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { login } from "../../redux/auth/authOperation";

import s from './LoginFormPage.module.css'

export default function LoginFormPage(){
  const dispatch = useDispatch();


 return <div className={s.loginForm__section}>
    <h1 className={s.loginForm__title}>Hello friend, go to your profile </h1>
    <p className={s.loginForm__subTitle}>your tasks are waiting for you </p>
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
        }
        if(!values.password) {
          errors.password = 'Required';
        } else if ( values.password.length <8 ) {
          errors.password = 'Your password should be at least 8 characters long';
        }

        return errors;
      }}

      onSubmit={(values, { setSubmitting }) => {
        const form = values;
        dispatch(
          login({
              email: form.email,
              password:  form.password,
            })
      );
        setSubmitting(false);

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
        <form onSubmit={handleSubmit} className={s.loginForm}>
          <label htmlFor="email" className={s.loginForm__label}>Email Address</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className={s.loginForm__input}
          />
          {errors.email && touched.email && errors.email}
          <label htmlFor="password" className={s.loginForm__label}>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            className={s.loginForm__input}
          />
          {errors.password && touched.password && errors.password}

         
        
          <button type="submit" disabled={isSubmitting} className={s.loginForm__submitBtn}>
            Submit
          </button>
        </form>
      )}
    </Formik>


    <p className={s.loginForm__account}> 
      Don’t have an account? 
            <NavLink className={s.loginForm__accountLink} to={`/registration`}>
              Sign up 
            </NavLink>
            </p>
  </div>

}

