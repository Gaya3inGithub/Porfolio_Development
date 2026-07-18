export interface Certificate {
  id: number;
  title: string;
  platform: string;
  issuer: string;
  date: string;
  duration: string;
  level: string;
  description: string;
  skills: string[];
  image: string;
  credential: string;
  theme: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "HTML",
    platform: "Programiz",
    issuer: "Programiz",
    date: "January 2025",
    duration: "Foundation",
    level: "Beginner",
    description:
      "Completed foundational HTML course covering semantic structure, accessibility and responsive web development.",
    skills: ["Semantic HTML", "Forms", "Accessibility", "Responsive Layout"],
    image: "/certificates/html.png",
    credential: "https://programiz.pro/certificates/detail/47A8678FC881",
    theme: "blue",
  },
  {
    id: 2,
    title: "CSS",
    platform: "Udemy",
    issuer: "Udemy",
    date: "December 2022",
    duration: "Comprehensive",
    level: "Intermediate",
    description:
      "Completed comprehensive CSS training covering layouts, Flexbox, Grid, responsive design and animations.",
    skills: ["Flexbox", "Grid", "Animations", "Responsive Design"],
    image: "/certificates/css.png",
    credential: "https://www.udemy.com/certificate/UC-0147670a-ddc5-475c-b2f1-8fcf5789e8ef/",
    theme: "purple",
  },
  {
    id: 3,
    title: "JavaScript",
    platform: "GUVI",
    issuer: "GUVI",
    date: "June 2023",
    duration: "Practical",
    level: "Intermediate",
    description:
      "Successfully completed JavaScript programming certification with practical DOM manipulation and ES6 concepts.",
    skills: ["ES6", "DOM", "Events", "Async JavaScript"],
    image: "/certificates/javascript.png",
    credential: "https://www.guvi.in/verify-certificate?id=8603u165923zQ57bk8",
    theme: "amber",
  },
  {
    id: 4,
    title: "Java Collections",
    platform: "Udemy",
    issuer: "Udemy",
    date: "February 2026",
    duration: "Comprehensive",
    level: "Advanced",
    description:
      "Advanced Java Collections Framework including Generics, Streams and Lambda Expressions.",
    skills: ["Collections", "Streams", "Generics", "Lambda"],
    image: "/certificates/java.png",
    credential: "https://www.udemy.com/certificate/UC-b987c691-ebfe-4da7-b788-96a1c2152808/",
    theme: "orange",
  },
  {
    id: 5,
    title: "Java OOP",
    platform: "LinkedIn Learning",
    issuer: "LinkedIn",
    date: "July 2025",
    duration: "Core",
    level: "Intermediate",
    description:
      "Object-Oriented Programming concepts including abstraction, inheritance, encapsulation and polymorphism.",
    skills: ["OOP", "Inheritance", "Polymorphism", "Abstraction"],
    image: "/certificates/oops.png",
    credential:
      "https://www.linkedin.com/learning/certificates/a7b784a77e76dc99b803ddcbb9051f750d32368745fd299a16f78898d7f7ec52?trk=share_certificate",
    theme: "cyan",
  },
  {
    id: 6,
    title: "SQL Advanced",
    platform: "HackerRank",
    issuer: "HackerRank",
    date: "September 2024",
    duration: "Skill Assessment",
    level: "Advanced",
    description:
      "Advanced SQL certification demonstrating database querying, joins, aggregations and optimization.",
    skills: ["Joins", "Aggregations", "Optimization", "Complex Queries"],
    image: "/certificates/sql.png",
    credential: "https://www.hackerrank.com/certificates/4b4e1c6e1b45",
    theme: "rose",
  },
  {
    id: 7,
    title: "Git & GitHub",
    platform: "Geekster",
    issuer: "Geekster",
    date: "September 2024",
    duration: "Practical",
    level: "Intermediate",
    description:
      "Version control and collaborative software development using Git and GitHub.",
    skills: ["Git", "GitHub", "Branching", "Merge"],
    image: "/certificates/github.png",
    credential: "https://drive.google.com/file/d/1FDwZ4rMi-ZC0-RWMcXr0OA0eKUlb7Z_B/view?usp=sharing",
    theme: "indigo",
  },
  {
    id: 8,
    title: "Google AI",
    platform: "Coursera",
    issuer: "Google Career Certificates",
    date: "July 2026",
    duration: "7 Courses",
    level: "Professional Certificate",
    description:
      "Completed the Google AI Professional Certificate, building practical skills for responsible AI use across research, communication, content creation, data analysis and app building.",
    skills: ["AI Fundamentals", "Research & Insights", "AI Communication", "Data Analysis"],
    image: "/certificates/google-ai.png",
    credential: "https://www.coursera.org/account/accomplishments/specialization/ROZ1150IAAUG",
    theme: "blue",
  },
  {
    id: 9,
    title: "Java FullStack Developer",
    platform: "Coursera",
    issuer: "Board Infinity",
    date: "July 2026",
    duration: "3 Courses",
    level: "Specialization",
    description:
      "Completed the Java FullStack Developer specialization, covering Java fundamentals, full-stack development and backend data structures.",
    skills: ["Java Fundamentals", "Full-Stack Development", "Spring & Spring Boot", "Data Structures"],
    image: "/certificates/javafs.png",
    credential: "https://www.coursera.org/account/accomplishments/specialization/6S3ST9RXXBKD",
    theme: "orange",
  },
];
