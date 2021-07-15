import { v4 as uuidv4 } from 'uuid';
import A2 from '../images/A2.png';
import A3 from '../images/A3.png';
import GreenCtgImg from '../images/A1.png';
import A5 from '../images/A5.jpg';
import A4 from '../images/A4.jpg';
import P1 from '../images/predictions-1.jpg'
import A6 from '../images/A6.png';


const projects = [
  {
    id: uuidv4(),
    name: 'Living',
    desc:
      'An website for writing blogs related to physical and mental health. ReactJs as Front-End and Firebase/Firestore as Back-End',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Grooters India Website',
    desc:
      'Website for Startup Grooters India an online interface for selling fresh plants in Home',
    img: A2,
  },
  
  {
    id: uuidv4(),
    name: 'ICCISIOT Nit Agartala',
    desc:
      'Website for international science conference to be held at NIT Agartala',
    img: A3,
  },
  {
    id: uuidv4(),
    name: 'College Explorer',  
    desc:
      'An Web-App for finding suituable college in India according to your Joint Entrance Examination Rank and also have pdfs of past year question paper',
    img: A6,
  },
  {
    id: uuidv4(),
    name: 'Motion Detector',
    desc:
      'Detection of any motion or movement of an object using the webcam and giving the interval of presence and absenc',
    img: A4,
  },
  {
    id: uuidv4(),
    name: "Blink Jukebox",
    desc:
      'Playing music in your laptop by selecting songs just by eye movements an Artificial Intelligence Project',
    img: A5,
  },
 
  {
    id: uuidv4(),
    name: 'Real Time Object Detection',  
    desc:
      'The pretrained weights is called yolov3 and the model is able to recognize 80 objects around ous!!',
    img: P1,
  }
  ,
];

export default projects;