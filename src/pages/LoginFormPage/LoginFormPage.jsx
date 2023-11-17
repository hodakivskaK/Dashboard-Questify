import { Formik } from 'formik';
import { NavLink } from 'react-router-dom';

import s from './LoginFormPage.module.css'

export default function LoginFormPage(){



 return <div className={s.loginForm__section}>
    <h1 className={s.loginForm__title}>Hello friend, go to your profile </h1>
    <h3 className={s.loginForm__subTitle}>your tasks are waiting for you </h3>
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
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
            Log in
          </button>
        </form>
      )}
    </Formik>


    <p className={s.loginForm__account}>Have not an account? 
            <NavLink className={s.loginForm__accountLink} to={`/registration`}>
            Register here
            </NavLink>
            </p>
  </div>

}

