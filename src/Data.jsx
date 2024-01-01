import { nanoid } from 'nanoid';
import { IoIosBookmarks } from 'react-icons/io';
import { MdBackHand } from 'react-icons/md';
import { TbProgressHelp } from 'react-icons/tb';
import img1 from './assets/algo.jpeg';
import img2 from './assets/assembly.jpg';
import img3 from './assets/oop.jpg';
export const students = [
  {
    firstName: 'farouk',
    lastName: 'ouledmeriem',
    email: 'farouk@gmail.com',
    password: 'gg',
    marks: [],
  },
];

export const sideBarContent = [
  {
    id: nanoid(),
    name: 'Module',
    icon: <IoIosBookmarks />,
  },
  {
    id: nanoid(),
    name: 'Consultation',
    icon: <MdBackHand />,
  },
  {
    id: nanoid(),
    name: 'Result',
    icon: <TbProgressHelp />,
  },
  {
    id: nanoid(),
    name: 'Help',
    icon: <IoIosBookmarks />,
  },
];

export const cardList = [
  {
    id: nanoid(),
    heading:
      'Must know algorithm and data structure with sorting algorithm and finaly how to calculate complexity and space',
    img: img1,
  },
  {
    id: nanoid(),
    heading:
      'Must know how to program with assembly language and how modern language conveted to assembly then to machine code',
    img: img2,
  },
  {
    id: nanoid(),
    heading:
      'Must know Object-Oriented Programming paradigm and the different between oop and function & procedural programming',
    img: img3,
  },
];
