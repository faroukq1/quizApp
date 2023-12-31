import { nanoid } from 'nanoid';
import { IoIosBookmarks } from 'react-icons/io';
import { MdBackHand } from 'react-icons/md';
import { PiExamFill } from 'react-icons/pi';
import { TbProgressHelp } from 'react-icons/tb';
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
