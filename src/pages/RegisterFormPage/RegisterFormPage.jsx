import { NavLink } from 'react-router-dom';
import { Formik } from 'formik';

import s from './RegisterFormPage.module.css'

export default function RegisterFormPage(){



 return <div className={s.registerForm__section}>
    <h1 className={s.registerForm__title}>Create your account</h1>
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
           <input type="checkbox"/>
  <span class="checkmark"></span>
         {/* <input className={s.registerForm__termServiceCheckbox} type="checkbox" required />
         I agree all statement in <span className={s.registerForm__termServiceLink}>Term Service </span> */}
       </label>
          
        
          <button type="submit" disabled={isSubmitting} className={s.registerForm__submitBtn}>
            Sigh up
          </button>
        </form>
      )}
    </Formik>


    <p className={s.registerForm__account}>Have already an account?
    <NavLink className={s.registerForm__accountLink} to={`/login`}>
            Login here
            </NavLink> </p>
  </div>

}

