import React, { Component } from 'react';
import profilePhoto from '../assets/profilePhotoCropped.jpg';
import ghassanPhoto from '../assets/ghassanProfile.JPG';

export default class About extends Component {
  render() {
    return (
      <div className="col-2-of-3 manual">
        <h2 className="heading-secondary">About</h2>
        <img src={profilePhoto} alt="Pavel" width="300px" align="right" />
        <a href="https://www.linkedin.com/in/pavel-rodionov-89aa5037/">
          <h3 className="heading-tertiary">Pavel Rodionov</h3>
        </a>
        <p>
          <br />
          Pavel is interested in the connections between web development and
          data science.
        </p>
        <p>
          <br />He has a bachelor degree in Maths and a Master in Applied
          Statistics and Datamining. He has two years of professional experience
          as a data scientist and recently participated in the web development
          bootcamp
          <a href="https://foundersandcoders.com/" target="_blank">
            <span> Founders and Coders </span>
          </a>
          in the Middle East.
        </p>
        <a href="https://www.linkedin.com/in/ghassan-maslamani-4428b218/">
          <br />
          <h3 className="heading-tertiary">Ghassan Maslamani</h3>
        </a>
        <img src={ghassanPhoto} alt="Ghassan" width="300px" align="right" />
        <p>
          <br />
          Ghassan is intereted in mechatronics and web development.
        </p>
        <p>
          He has a bachelor degree in Mechatronics Engineering. He has
          succesfully completed
          <a
            href="https://www.coursera.org/account/accomplishments/certificate/JH2BK8G79AY7"
            target="_blank"
          >
            <span> Coursera course </span>
          </a>
          on Convolutional Neural Networks and actively participates in
          <a href="https://www.kaggle.com/" target="_blank">
            <span> Kaggle </span>
          </a>
          data science competitions. Ghassan and Pavel started their
          collaboration at the Founders and Coders bootcamp
        </p>
      </div>
    );
  }
}
