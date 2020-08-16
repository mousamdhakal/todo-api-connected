import React from 'react';
import { useFormik } from 'formik';

import { registerUser } from '../../services/http';
import LoginHeader from '../../Containers/LoginHeader/LoginHeader';
import '../../styles/userForm.css';

export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    },

    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      registerUser(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <LoginHeader />
      <div>
        <div className="container">
          <form className="user-form" onSubmit={formik.handleSubmit}>
            <h2 className="user-form__heading">Sign Up</h2>
            <label className="user-form__label" htmlFor="first_name">
              <b>First Name</b>
            </label>
            <input
              id="first_name"
              className="user-form__input"
              type="text"
              placeholder="Enter First Name"
              name="first_name"
              onChange={formik.handleChange}
              value={formik.values.first_name || ''}
              required
            />
            <label className="user-form__label" htmlFor="last_name">
              <b>Last Name</b>
            </label>
            <input
              id="last_name"
              className="user-form__input"
              type="text"
              placeholder="Enter Last Name"
              name="last_name"
              onChange={formik.handleChange}
              value={formik.values.last_name || ''}
              required
            />
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
              value="Sign Up"
            />
          </form>
        </div>
      </div>
    </>
  );
}