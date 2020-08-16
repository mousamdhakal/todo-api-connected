import React from 'react';
import { useFormik } from 'formik';

import LoginHeader from '../../Containers/LoginHeader/LoginHeader';
import '../../styles/userForm.css';

export default function SignIn() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <LoginHeader />
      <div>
        <div className="container">
          <form className="user-form" onSubmit={formik.handleSubmit}>
            <h2 className="user-form__heading">Sign In</h2>
            <label className="user-form__label" htmlFor="email">
              <b>Email</b>
            </label>
            <input
              id="email"
              className="user-form__input"
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email || ''}
              required
            />

            <label className="user-form__label" htmlFor="password">
              <b>Password</b>
            </label>
            <input
              className="user-form__input"
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password || ''}
              required
            />
            <input
              className="user-form__submit"
              type="submit"
              value="Sign In"
            />
          </form>
        </div>
      </div>
    </>
  );
}
