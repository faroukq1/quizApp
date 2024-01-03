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
    link: 'dashboard',
    icon: <IoIosBookmarks />,
  },
  {
    id: nanoid(),
    name: 'Consultation',
    link: '/dashboard/consultation',
    icon: <MdBackHand />,
  },
  {
    id: nanoid(),
    name: 'Result',
    link: '/dashboard/result',
    icon: <TbProgressHelp />,
  },
  {
    id: nanoid(),
    name: 'Help',
    link: '/dashboard/help',
    icon: <IoIosBookmarks />,
  },
];

export const cardList = [
  {
    id: nanoid(),
    heading: 'Algorithm',
    desc: 'Must know algorithm and data structure with sorting algorithm and finally how to calculate complexity and space',
    img: img1,
    question: [
      {
        question:
          'Which algorithm sorts elements by repeatedly moving the largest unsorted element to the end?',
        answers: [
          'a) Insertion Sort',
          'b) Bubble Sort',
          'c) Merge Sort',
          'd) Quick Sort',
        ],
      },
      {
        question:
          'What data structure does a FIFO (First-In-First-Out) principle define?',
        answers: ['a) Stack', 'b) Queue', 'c) Heap', 'd) Linked List'],
      },
      {
        question:
          'What is the time complexity of the Bubble Sort algorithm in the worst-case scenario for an array of length (n)?',
        answers: ['a) O(n)', 'b) O(n log n)', 'c) O(n^2)', 'd) O(log n)'],
      },
      {
        question:
          'Which algorithm is used to find the shortest path in a weighted graph from a single source vertex to all other vertices?',
        answers: [
          'a) Depth-First Search (DFS)',
          'b) Breadth-First Search (BFS)',
          'c) Dijkstra algorithm',
          'd) Prim algorithm',
        ],
      },
      {
        question:
          'Which data structure uses LIFO (Last-In-First-Out) ordering?',
        answers: ['a) Queue', 'b) Heap', 'c) Stack', 'd) Tree'],
      },
      {
        question: 'What does the acronym "DFS" stand for in computer science?',
        answers: [
          'a) Depth-First Search',
          'b) Directed File System',
          'c) Dynamic Function Selection',
          'd) Data Formatting Standard',
        ],
      },
      {
        question:
          'Which algorithm works by repeatedly dividing the list in half and discarding the half that doesn’t contain the target value?',
        answers: [
          'a) Linear Search',
          'b) Binary Search',
          'c) Interpolation Search',
          'd) Exponential Search',
        ],
      },
      {
        question:
          'Which algorithm uses recursion to solve problems by breaking them down into smaller, simpler subproblems?',
        answers: [
          'a) Merge Sort',
          'b) Insertion Sort',
          'c) Quick Sort',
          'd) Binary Search',
        ],
      },
      {
        question:
          'What is the primary advantage of using dynamic programming in algorithm design?',
        answers: [
          'a) It reduces the need for loops in code',
          'b) It guarantees the fastest execution time',
          'c) It optimizes solutions by storing intermediate results',
          'd) It simplifies complex problems without recursion',
        ],
      },
      {
        question: 'What is the purpose of an algorithm?',
        answers: [
          'a) To solve complex mathematical equations',
          'b) To describe a sequence of steps to solve a problem',
          'c) To create computer programs',
          'd) To design user interfaces',
        ],
      },
    ],
  },
  {
    id: nanoid(),
    heading: 'Assembly',
    desc: 'Must know how to program with assembly language and how modern language converted to assembly then to machine code',
    img: img2,
    question: [
      {
        question: 'What is the primary function of an assembler?',
        answers: [
          'a) Translate assembly code into machine code',
          'b) Execute assembly code directly',
          'c) Optimize high-level language code',
          'd) Debug machine code',
        ],
      },
      {
        question:
          'Which component translates assembly language instructions into machine code?',
        answers: ['a) Interpreter', 'b) Compiler', 'c) Assembler', 'd) Linker'],
      },
      {
        question:
          'What does the acronym "CPU" stand for in computer architecture?',
        answers: [
          'a) Central Processing Unit',
          'b) Computer Processing Unit',
          'c) Central Program Unit',
          'd) Computing Processing Unit',
        ],
      },
      {
        question:
          'Which register is commonly used as an accumulator in x86 assembly language?',
        answers: ['a) AX', 'b) BX', 'c) CX', 'd) DX'],
      },
      {
        question:
          'Which addressing mode directly specifies the operand value in the instruction?',
        answers: ['a) Immediate', 'b) Direct', 'c) Indirect', 'd) Indexed'],
      },
      {
        question:
          'What is the purpose of the instruction pointer (IP) register?',
        answers: [
          'a) Holds the address of the next instruction to be executed',
          'b) Stores the result of arithmetic operations',
          'c) Manages the stack operations',
          'd) Performs logical operations',
        ],
      },
      {
        question:
          'Which command is used to move data between registers in assembly language?',
        answers: ['a) ADD', 'b) MOV', 'c) SUB', 'd) CMP'],
      },
      {
        question: 'Which directive reserves memory space in assembly language?',
        answers: ['a) .data', 'b) .reserve', 'c) .space', 'd) .alloc'],
      },
      {
        question: 'In x86 assembly, what does the "HLT" instruction do?',
        answers: [
          'a) Halts the processor until an interrupt occurs',
          'b) Halts the processor permanently',
          'c) Handles low-level interrupts',
          'd) Holds data temporarily',
        ],
      },
      {
        question:
          'Which of the following represents a comment in assembly language?',
        answers: [
          'a) // Comment',
          'b) # Comment',
          'c) /* Comment */',
          'd) ; Comment',
        ],
      },
    ],
  },
  {
    id: nanoid(),
    heading: 'Object-Oriented',
    desc: 'Must know Object-Oriented Programming paradigm and the difference between OOP and function & procedural programming',
    img: img3,
    questions: [
      {
        question: 'What is the primary goal of encapsulation in OOP?',
        answers: [
          'a) To simplify inheritance',
          'b) To combine data and methods into a single unit',
          'c) To eliminate polymorphism',
          'd) To prevent data hiding',
        ],
      },
      {
        question:
          'Which OOP principle promotes code reusability by allowing a class to inherit properties and behavior from another class?',
        answers: [
          'a) Abstraction',
          'b) Polymorphism',
          'c) Encapsulation',
          'd) Inheritance',
        ],
      },
      {
        question:
          'What is the term used to describe a blueprint or template that defines the properties and behaviors of objects?',
        answers: ['a) Instance', 'b) Method', 'c) Object', 'd) Class'],
      },
      {
        question: 'In OOP, what does the term "polymorphism" refer to?',
        answers: [
          'a) Ability to hide implementation details',
          'b) Ability to use a single interface for different data types',
          'c) Ability to prevent data manipulation',
          'd) Ability to restrict access to certain methods',
        ],
      },
      {
        question:
          'Which OOP concept emphasizes the ability of a class to have multiple methods with the same name but different implementations?',
        answers: [
          'a) Encapsulation',
          'b) Inheritance',
          'c) Polymorphism',
          'd) Abstraction',
        ],
      },
      {
        question:
          'What is the process of creating an object from a class called in OOP?',
        answers: [
          'a) Abstraction',
          'b) Inheritance',
          'c) Encapsulation',
          'd) Instantiation',
        ],
      },
      {
        question: 'In OOP, what does the term "inheritance" signify?',
        answers: [
          'a) Process of creating objects',
          'b) Process of reusing code from one class in another',
          'c) Process of hiding data within a class',
          'd) Process of executing multiple threads simultaneously',
        ],
      },
      {
        question:
          'Which OOP principle focuses on providing a simple interface to interact with complex systems?',
        answers: [
          'a) Polymorphism',
          'b) Abstraction',
          'c) Encapsulation',
          'd) Inheritance',
        ],
      },
      {
        question:
          'What is the term used to describe the ability of an object to take on multiple forms?',
        answers: [
          'a) Encapsulation',
          'b) Polymorphism',
          'c) Inheritance',
          'd) Abstraction',
        ],
      },
      {
        question:
          'Which OOP concept refers to the ability to restrict access to certain components within a program?',
        answers: [
          'a) Inheritance',
          'b) Encapsulation',
          'c) Polymorphism',
          'd) Abstraction',
        ],
      },
    ],
  },
];

export default cardList;
