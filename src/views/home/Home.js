import React from 'react';
import './Home.css';
import NavBar from '../../Containers/NavBar/NavBar';

export default function Home() {
  return (
    <>
      <NavBar />
      <section className="welcome">
        <div className="container">
          <div className="welcome__text">
            <h2 className="welcome__heading">
              Welcome to simple and elegant todo app.
            </h2>
            <p className="welcome__paragraph">Login or Sign Up to continue.</p>
          </div>
        </div>
      </section>
    </>
  );
}
