import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';

import AboutImg from '../assets/images/ab.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
      color: #FD8000;;
    }
  }
  .resume{
    font-size: 2.2rem;
    font-weight: bold;
    background-color: ${(props) =>
      props.outline ? 'transperant' : 'var(--white)'};
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--gary-1)' : '#FD8000')};
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    .resume {
      font-size: 1.8rem;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
    color: white;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    color: white;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Rishi Raj Tiwari</span>
              </p>
              <h2 className="about__heading">ReactJs developer as FrontEnd and Firebase as BackEnd</h2>
              <div className="about__info">
                <PText>
                Heyy I am Rishi Raj Tiwari from Bhopal, Madhya Pradesh and a 3rd student for the National Institute of Technology, Agartala Computer Science Branch. 
                  <br /> <br />
                  I love to study new technologies and creating websites I also have a good knowledge of Data Structures And algorithms and also solved 80+ in Geeks for Geeks and a few question of Leetcode.
I am also the front-End developer for the StartUp Grooters India and also one of the web developers for an International conference website ICCISIOT 2021 going to be held at NIT Agartala.
                  <br />
                  <br />
                  
                  Developing new technologies and being passionate about my work is my milestone. My hobbies are Playing, Reading books and listening to music
                </PText>
              </div>
              <a href='https://drive.google.com/file/d/1KSS2EDGkvnwpJyKSTdhxZnwKjukTe_Ds/view?usp=sharing'><button className="resume">Download Resume</button></a>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>
              <AboutInfoItem
                title="College"
                items={['National Institute of Technology Agartala']}
              />
              <AboutInfoItem
                title="School"
                items={['Carmel Convent Sr Sec School Ratanpur, Bhopal']}
              />
             
            
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT', 'SASS', 'AnimeJs', 'JQuery']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Firebase', 'Firestore', 'Redux']}
              />
              <AboutInfoItem
                title="Design"
                items={['Figma', 'AdobeXD']}
              />
              <AboutInfoItem
                title="AI"
                items={['OpenCV', 'Dlib', 'Scikit-learn', 'Artificial Neural Network']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2020-Till Date"
                items={['Web developer for StartUp Grooters India']}
              />
            
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
