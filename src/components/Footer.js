import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol.js';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: #000000;
  padding-top: 10rem;
  margin-bottom: 7em;
  padding-bottom: 7em;
  box-shadow: 6px 0 12px 20px rgba(56, 125, 255, 0.17);
  -webkit-filter: drop-shadow(0 12px 20px rgba(56, 125, 255, 0.017));
  filter: drop-shadow(0 12px 20px rgba(56, 125, 255, 0.017));
  .container {
    display: flex;
    
    gap: 3rem;
  
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Rishi Raj Tiwari</h1>
          <PText>
            A Full Stack Developer from Bhopal, Madhya Pradesh also worked in startUp called Grooters India and also an FreeLancer developing websites in react framework
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '8319971782',
                path: 'tel:+91 8319971782',
              },
              {
                title: 'rrajtiwari4@gmail.com',
                path: 'mailto:rrajtiwari4@gmail.com',
              },
              {
                title: 'Bhopal, Madhya Pradesh, India',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Facebook',
                path: 'http://facebook.com',
              },
              {
                title: 'Twitter',
                path: 'http://twitter.com',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>                       
            © 2021 - Rishi Raj Tiwari
            
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}