import { FaLaravel } from "react-icons/fa";
import { GrAndroid, GrMysql } from "react-icons/gr";
import { SiFigma, SiFirebase, SiKotlin, SiMicrosoftsqlserver, SiNestjs, SiNextdotjs, SiPwa, SiReact, SiTailwindcss } from "react-icons/si";

export const projectData = [
  {
    name: 'LegacyArt',
    demo: '/assets/projects/legacyart-demo.png',
    banner: '/assets/projects/legacyart-demo.png',
    live: '-',
    github: 'https://github.com/lukast2410/LegacyArT.git',
    shortDescription: 'Web Application for NFT Marketplace',
    description: 'NFT Marketplace with auction system based on website application.',
    softwares: [
      {
        name: 'Laravel',
        icon: FaLaravel,
      },
      {
        name: 'MySQL',
        icon: GrMysql,
      },
      {
        name: 'TailwindCSS',
        icon: SiTailwindcss,
      },
    ]
  },
  {
    name: 'Binusmaya Practicum',
    demo: '/assets/projects/binusmaya-practicum-demo.gif',
    banner: '/assets/projects/binusmaya-practicum-demo.gif',
    live: 'https://bluejack.binus.ac.id/lab',
    github: 'https://github.com/lukast2410/RIG-Bimay-Practicum-NextJS.git',
    shortDescription: 'Laboratory Course Organizer for Student in Binus',
    description: 'Laboratory Course Organizer for Student to view schedules, subject\'s material, download and upload assignment, etc.',
    softwares: [
      {
        name: 'NextJS',
        icon: SiNextdotjs,
      },
      {
        name: 'NestJS',
        icon: SiNestjs,
      },
      {
        name: 'SQL Server',
        icon: SiMicrosoftsqlserver,
      },
      {
        name: 'PWA',
        icon: SiPwa,
      },
    ]
  },
  {
    name: 'Dear Mory',
    demo: '/assets/projects/dear-mory-demo.png',
    banner: '/assets/projects/dear-mory-large.png',
    download: '-',
    github: 'https://github.com/lukast2410/Dear-Mory.git',
    shortDescription: 'Diary, Money organizer, and Reminder Application',
    description: 'Dear Mory is an application that could be a friend for you to tell your stories about your daily life.',
    softwares: [
      {
        name: 'Kotlin',
        icon: SiKotlin,
      },
      {
        name: 'Android Studio',
        icon: GrAndroid,
      },
      {
        name: 'Firebase',
        icon: SiFirebase,
      },
    ]
  },
  {
    name: 'BurgeL King',
    demo: '/assets/projects/burgelking-demo.gif',
    banner: '/assets/projects/burgelking-demo.gif',
    live: 'https://burgelking.vercel.app/',
    github: 'https://github.com/lukast2410/BurgeL-King.git',
    shortDescription: 'Burger Restaurant Website for Promotion and Restaurant Profile',
    description: 'BurgeL King Website introduce a Burger Restaurant with the best deals.',
    softwares: [
      {
        name: 'Figma',
        icon: SiFigma,
      },
      {
        name: 'React',
        icon: SiReact,
      },
    ]
  },
]