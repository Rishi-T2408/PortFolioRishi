import React from 'react';
import { MdDesktopMac, MdCode } from 'react-icons/md';
import { RiStackFill } from "react-icons/ri";
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="Let's now know about my skills" heading="Skills" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="web design"
            desc="I do UI/UX design for the website that helps the website to get a unique look."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="web dev"
            desc="Can make websites having ReactJs as it's Front-End also know about Firebase Firestore"
          />
          <ServicesSectionItem
            icon={<RiStackFill />}
            title="Problem Solving"
            desc="Completed Data structures and Algorithm. Solved 100+ questions in GFG and also an 3 star coder in HackerRank"
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
