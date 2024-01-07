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
    link: '/dashboard',
    icon: <IoIosBookmarks />,
  },
  {
    id: nanoid(),
    name: 'Result',
    link: '/result',
    icon: <TbProgressHelp />,
  },
  {
    id: nanoid(),
    name: 'Consultation',
    link: '/consultation',
    icon: <MdBackHand />,
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
        answers: [' Insertion Sort', 'Bubble Sort', 'Merge Sort', 'Quick Sort'],
      },
      {
        question:
          'What data structure does a FIFO (First-In-First-Out) principle define?',
        answers: [' Stack', 'Queue', 'Heap', 'Linked List'],
      },
      {
        question:
          'What is the time complexity of the Bubble Sort algorithm in the worst-case scenario for an array of length (n)?',
        answers: [' O(n)', 'O(n log n)', 'O(n^2)', 'O(log n)'],
      },
      {
        question:
          'Which algorithm is used to find the shortest path in a weighted graph from a single source vertex to all other vertices?',
        answers: [
          ' Depth-First Search (DFS)',
          'Breadth-First Search (BFS)',
          'Dijkstra algorithm',
          'Prim algorithm',
        ],
      },
      {
        question:
          'Which data structure uses LIFO (Last-In-First-Out) ordering?',
        answers: [' Queue', 'Heap', 'Stack', 'Tree'],
      },
      {
        question: 'What does the acronym "DFS" stand for in computer science?',
        answers: [
          ' Depth-First Search',
          'Directed File System',
          'Dynamic Function Selection',
          'Data Formatting Standard',
        ],
      },
      {
        question:
          'Which algorithm works by repeatedly dividing the list in half and discarding the half that doesn’t contain the target value?',
        answers: [
          ' Linear Search',
          'Binary Search',
          'Interpolation Search',
          'Exponential Search',
        ],
      },
      {
        question:
          'Which algorithm uses recursion to solve problems by breaking them down into smaller, simpler subproblems?',
        answers: [
          ' Merge Sort',
          'Insertion Sort',
          'Quick Sort',
          'Binary Search',
        ],
      },
      {
        question:
          'What is the primary advantage of using dynamic programming in algorithm design?',
        answers: [
          ' It reduces the need for loops in code',
          'It guarantees the fastest execution time',
          'It optimizes solutions by storing intermediate results',
          'It simplifies complex problems without recursion',
        ],
      },
      {
        question: 'What is the purpose of an algorithm?',
        answers: [
          ' To solve complex mathematical equations',
          'To describe a sequence of steps to solve a problem',
          'To create computer programs',
          'To design user interfaces',
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
          ' Translate assembly code into machine code',
          'Execute assembly code directly',
          'Optimize high-level language code',
          'Debug machine code',
        ],
      },
      {
        question:
          'Which component translates assembly language instructions into machine code?',
        answers: [' Interpreter', 'Compiler', 'Assembler', 'Linker'],
      },
      {
        question:
          'What does the acronym "CPU" stand for in computer architecture?',
        answers: [
          ' Central Processing Unit',
          'Computer Processing Unit',
          'Central Program Unit',
          'Computing Processing Unit',
        ],
      },
      {
        question:
          'Which register is commonly used as an accumulator in x86 assembly language?',
        answers: [' AX', 'BX', 'CX', 'DX'],
      },
      {
        question:
          'Which addressing mode directly specifies the operand value in the instruction?',
        answers: [' Immediate', 'Direct', 'Indirect', 'Indexed'],
      },
      {
        question:
          'What is the purpose of the instruction pointer (IP) register?',
        answers: [
          ' Holds the address of the next instruction to be executed',
          'Stores the result of arithmetic operations',
          'Manages the stack operations',
          'Performs logical operations',
        ],
      },
      {
        question:
          'Which command is used to move data between registers in assembly language?',
        answers: [' ADD', 'MOV', 'SUB', 'CMP'],
      },
      {
        question: 'Which directive reserves memory space in assembly language?',
        answers: [' .data', '.reserve', '.space', '.alloc'],
      },
      {
        question: 'In x86 assembly, what does the "HLT" instruction do?',
        answers: [
          ' Halts the processor until an interrupt occurs',
          'Halts the processor permanently',
          'Handles low-level interrupts',
          'Holds data temporarily',
        ],
      },
      {
        question:
          'Which of the following represents a comment in assembly language?',
        answers: [' // Comment', '# Comment', '/* Comment */', '; Comment'],
      },
    ],
  },
  {
    id: nanoid(),
    heading: 'ObjectOriented',
    desc: 'Must know Object-Oriented Programming paradigm and the difference between OOP and function & procedural programming',
    img: img3,
    question: [
      {
        question: 'What is the primary goal of encapsulation in OOP?',
        answers: [
          'To simplify inheritance',
          'To combine data and methods into a single unit',
          'To eliminate polymorphism',
          'To prevent data hiding',
        ],
      },
      {
        question:
          'Which OOP principle promotes code reusability by allowing a class to inherit properties and behavior from another class?',
        answers: [
          ' Abstraction',
          'Polymorphism',
          'Encapsulation',
          'Inheritance',
        ],
      },
      {
        question:
          'What is the term used to describe a blueprint or template that defines the properties and behaviors of objects?',
        answers: [' Instance', 'Method', 'Object', 'Class'],
      },
      {
        question: 'In OOP, what does the term "polymorphism" refer to?',
        answers: [
          ' Ability to hide implementation details',
          'Ability to use a single interface for different data types',
          'Ability to prevent data manipulation',
          'Ability to restrict access to certain methods',
        ],
      },
      {
        question:
          'Which OOP concept emphasizes the ability of a class to have multiple methods with the same name but different implementations?',
        answers: [
          ' Encapsulation',
          'Inheritance',
          'Polymorphism',
          'Abstraction',
        ],
      },
      {
        question:
          'What is the process of creating an object from a class called in OOP?',
        answers: [
          ' Abstraction',
          'Inheritance',
          'Encapsulation',
          'Instantiation',
        ],
      },
      {
        question: 'In OOP, what does the term "inheritance" signify?',
        answers: [
          ' Process of creating objects',
          'Process of reusing code from one class in another',
          'Process of hiding data within a class',
          'Process of executing multiple threads simultaneously',
        ],
      },
      {
        question:
          'Which OOP principle focuses on providing a simple interface to interact with complex systems?',
        answers: [
          ' Polymorphism',
          'Abstraction',
          'Encapsulation',
          'Inheritance',
        ],
      },
      {
        question:
          'What is the term used to describe the ability of an object to take on multiple forms?',
        answers: [
          ' Encapsulation',
          'Polymorphism',
          'Inheritance',
          'Abstraction',
        ],
      },
      {
        question:
          'Which OOP concept refers to the ability to restrict access to certain components within a program?',
        answers: [
          ' Inheritance',
          'Encapsulation',
          'Polymorphism',
          'Abstraction',
        ],
      },
    ],
  },
];

export const answers = [
  {
    id: nanoid(),
    heading: 'Algorithm',
    img: img1,
    question: [
      {
        question:
          'Which algorithm sorts elements by repeatedly moving the largest unsorted element to the end?',
        answers: 'Merge Sort',
      },
      {
        question:
          'What data structure does a FIFO (First-In-First-Out) principle define?',
        answers: 'Heap',
      },
      {
        question:
          'What is the time complexity of the Bubble Sort algorithm in the worst-case scenario for an array of length (n)?',
        answers: 'O(n log n)',
      },
      {
        question:
          'Which algorithm is used to find the shortest path in a weighted graph from a single source vertex to all other vertices?',
        answers: 'Breadth-First Search (BFS)',
      },
      {
        question:
          'Which data structure uses LIFO (Last-In-First-Out) ordering?',
        answers: 'Heap',
      },
      {
        question: 'What does the acronym "DFS" stand for in computer science?',
        answers: 'Directed File System',
      },
      {
        question:
          'Which algorithm works by repeatedly dividing the list in half and discarding the half that doesn’t contain the target value?',
        answers: 'Binary Search',
      },
      {
        question:
          'Which algorithm uses recursion to solve problems by breaking them down into smaller, simpler subproblems?',
        answers: 'Insertion Sort',
      },
      {
        question:
          'What is the primary advantage of using dynamic programming in algorithm design?',
        answers: 'It guarantees the fastest execution time',
      },
      {
        question: 'What is the purpose of an algorithm?',
        answers: 'To describe a sequence of steps to solve a problem',
      },
    ],
  },
  {
    id: nanoid(),
    heading: 'Assembly',
    img: img2,
    question: [
      {
        question: 'What is the primary function of an assembler?',
        answers: 'Execute assembly code directly',
      },
      {
        question:
          'Which component translates assembly language instructions into machine code?',
        answers: 'Compiler',
      },
      {
        question:
          'What does the acronym "CPU" stand for in computer architecture?',
        answers: 'Computer Processing Unit',
      },
      {
        question:
          'Which register is commonly used as an accumulator in x86 assembly language?',
        answers: 'BX',
      },
      {
        question:
          'Which addressing mode directly specifies the operand value in the instruction?',
        answers: 'Direct',
      },
      {
        question:
          'What is the purpose of the instruction pointer (IP) register?',
        answers: 'Stores the result of arithmetic operations',
      },
      {
        question:
          'Which command is used to move data between registers in assembly language?',
        answers: 'MOV',
      },
      {
        question: 'Which directive reserves memory space in assembly language?',
        answers: '.space',
      },
      {
        question: 'In x86 assembly, what does the "HLT" instruction do?',
        answers: 'Halts the processor permanently',
      },
      {
        question:
          'Which of the following represents a comment in assembly language?',
        answers: '# Comment',
      },
    ],
  },
  {
    id: nanoid(),
    heading: 'ObjectOriented',
    img: img3,
    question: [
      {
        question: 'What is the primary goal of encapsulation in OOP?',
        answers: 'To combine data and methods into a single unit',
      },
      {
        question:
          'Which OOP principle promotes code reusability by allowing a class to inherit properties and behavior from another class?',
        answers: 'Polymorphism',
      },
      {
        question:
          'What is the term used to describe a blueprint or template that defines the properties and behaviors of objects?',
        answers: 'Method',
      },
      {
        question: 'In OOP, what does the term "polymorphism" refer to?',
        answers: 'Ability to use a single interface for different data types',
      },
      {
        question:
          'Which OOP concept emphasizes the ability of a class to have multiple methods with the same name but different implementations?',
        answers: 'Inheritance',
      },
      {
        question:
          'What is the process of creating an object from a class called in OOP?',
        answers: 'Inheritance',
      },
      {
        question: 'In OOP, what does the term "inheritance" signify?',
        answers: 'Process of reusing code from one class in another',
      },
      {
        question:
          'Which OOP principle focuses on providing a simple interface to interact with complex systems?',
        answers: 'Abstraction',
      },
      {
        question:
          'What is the term used to describe the ability of an object to take on multiple forms?',
        answers: 'Polymorphism',
      },
      {
        question:
          'Which OOP concept refers to the ability to restrict access to certain components within a program?',
        answers: 'Encapsulation',
      },
    ],
  },
];

export const emailTemplate = `
NOTICE : this is an email template you should respect this pattern  when you send it
Subject: Request for Reassessment of Exam Paper
Dear [Teacher's Name],



I hope this email finds you well. I am writing to address concerns I have regarding the recent evaluation of my [Name of the Exam or Assignment] conducted on [Exam Date]. Firstly, I want to express my appreciation for your dedication and time spent assessing our papers.
After receiving my graded exam, I took the time to review the feedback and marks provided. While I understand the complexity of grading numerous papers, I believe there might have been some misinterpretation or oversight in the evaluation of certain sections/questions. I am writing to respectfully request a reevaluation or recorrection of these specific areas.
Upon reviewing [mention the section/question numbers or provide detailed examples], I found [briefly explain the discrepancy or your concern with the evaluation, citing specific reasons or references]. I value your expertise and understanding of the subject matter, and I seek your guidance in understanding the assessment criteria applied to my responses.
Could you kindly consider revisiting the mentioned sections/questions to ensure accuracy in the assessment? Any clarification or additional feedback you can provide would be immensely beneficial for my comprehension and improvement in the subject matter.
I am willing to provide any further explanations or materials that might assist in the reassessment process. Your guidance in understanding the evaluation criteria would be greatly appreciated and will aid in my academic progress.
I understand your time is valuable, and I sincerely appreciate your attention to this matter. If possible, I kindly request your prompt consideration of my request for a reevaluation.
Thank you very much for your understanding and support in addressing this concern. I am eagerly looking forward to your response regarding the possibility of a reassessment.
Warm regards,



[Your Name]
[Your Contact Information]
[Your Student ID (if applicable)]
`;

export default cardList;
