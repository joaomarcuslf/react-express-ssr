import React from 'react';
import UserForm from '../components/user-form';

const MainPage = () => (
  <div className="container">
    <section className="hero is-info">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Hero title</h1>
          <h2 className="subtitle">Hero subtitle</h2>
        </div>
      </div>
    </section>

    <UserForm />
  </div>
);

export default MainPage;
