export const projects = [
  {
    id: 1,
    title: "Parent Linker",
      type: "Full Stack Web Application",
      image: "/projects/parent linker.png",
  engineeringGoal:
  "Designed to improve communication between parents and educational institutions through a centralized platform that organizes student information, announcements, and updates.",

developmentJourney: [
  "Planned the application workflow and identified the key user roles.",
  "Designed the database structure to organize student and parent information efficiently.",
  "Implemented the Java backend and integrated it with MySQL using JDBC.",
  "Connected the frontend with the backend and tested the complete application workflow."
],
    technologies: [
      "Java",
      "JDBC",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    problem:
      "A platform that helps parents and educational institutions communicate efficiently.",

    architecture: [
      "Frontend",
      "Java Backend",
      "MySQL Database",
    ],

    features: [
      "Authentication",
      "Student Management",
      "Parent Communication",
      "Database Integration",
    ],
    engineeringDecisions: [
  {
    title: "Layered Project Structure",
    reason:
      "Separated the application into frontend, backend, and database components to keep the project organized and easier to maintain."
  },
  {
    title: "JDBC Integration",
    reason:
      "Used JDBC to gain a solid understanding of direct Java-to-database communication before adopting higher-level frameworks."
  },
  {
    title: "Relational Database Design",
    reason:
      "Structured MySQL tables to reduce duplicate data and maintain consistent relationships between students and parents."
  },
  {
    title: "Simple User Interface",
    reason:
      "Focused on a clean interface so users could navigate essential features with minimal complexity."
  }
],
skillsStrengthened: [
  "Problem Solving",
  "Backend Development",
  "Database Design",
  "Object-Oriented Programming",
  "Debugging",
  "Application Planning",
  "Code Organization",
  "Logical Thinking"
],
challenges: [
  {
    challenge: "Organizing relationships between students, parents, and academic information.",
    solution: "Designed a structured relational database to maintain consistent connections between records."
  },
  {
    challenge: "Keeping application modules easy to maintain as the project grew.",
    solution: "Separated responsibilities into frontend, backend, and database layers for better organization."
  },
  {
    challenge: "Validating user input before storing data.",
    solution: "Implemented validation checks to improve data accuracy and reduce invalid entries."
  },
  {
    challenge: "Maintaining reliable communication between the application and the database.",
    solution: "Used JDBC with structured query handling and tested database operations across different scenarios."
  }
],
learnings: [
  "Applied object-oriented principles to build a structured Java application.",
  "Improved database design by organizing related information efficiently.",
  "Strengthened debugging skills while integrating Java with MySQL using JDBC.",
  "Learned the importance of planning application workflows before implementation.",
  "Gained experience writing cleaner, modular, and maintainable code."
],
futureEnhancements: [
  "Spring Boot Migration",
  "REST APIs",
  "JWT Authentication",
  "Role-Based Access",
  "Email Notifications",
  "Cloud Deployment"
],

reflection:
  "Building this project strengthened my understanding of backend development, database design, and application architecture. It reinforced the importance of planning before implementation and writing maintainable code that can evolve with future requirements.",
  },

  {
    id: 2,
    title: "Product Tracker",
      type: "Core Java Application",  
    image: "/projects/product tracker.png",
  
    technologies: [
      "Java",
      "Collections",
      "OOP",
    ],

    problem:
      "Tracks products and manages inventory efficiently.",

    architecture: [
      "Java",
      "Business Logic",
      "Memory Storage",
    ],

    features: [
      "CRUD Operations",
      "Search",
      "Sorting",
      "Collections",
    ],
    engineeringGoal:
  "Developed a Java-based application to simplify product inventory management by providing an organized way to store, update, search, and manage product information efficiently.",

developmentJourney: [
  "Planned the application flow and identified the core product management operations.",
  "Designed Java classes using object-oriented principles to represent products and their behaviors.",
  "Implemented CRUD operations using Java Collections for efficient in-memory data management.",
  "Tested search, update, and sorting functionality to ensure accurate inventory management."
],

engineeringDecisions: [
  {
    title: "Object-Oriented Design",
    reason:
      "Structured the application into reusable classes to improve maintainability and readability."
  },
  {
    title: "Java Collections",
    reason:
      "Used Collections Framework to efficiently manage product records without introducing database complexity."
  },
  {
    title: "Modular CRUD Logic",
    reason:
      "Separated create, read, update, and delete operations for easier maintenance and future expansion."
  },
  {
    title: "Simple Console Interface",
    reason:
      "Focused on implementing strong backend logic before introducing graphical interfaces."
  }
],

skillsStrengthened: [
  "Object-Oriented Programming",
  "Java Collections",
  "CRUD Operations",
  "Problem Solving",
  "Application Design",
  "Debugging",
  "Logical Thinking",
  "Code Organization"
],

challenges: [
  {
    challenge: "Managing product records efficiently without a database.",
    solution:
      "Used Java Collections to organize and manipulate product information dynamically."
  },
  {
    challenge: "Avoiding duplicate product entries.",
    solution:
      "Implemented validation logic before adding new products."
  },
  {
    challenge: "Keeping CRUD operations maintainable.",
    solution:
      "Separated each operation into dedicated methods following modular design principles."
  },
  {
    challenge: "Providing accurate search functionality.",
    solution:
      "Designed efficient search logic to retrieve products based on user input."
  }
],

learnings: [
  "Strengthened understanding of object-oriented programming concepts.",
  "Improved ability to organize application logic into reusable components.",
  "Gained experience implementing CRUD operations using Java Collections.",
  "Learned the importance of clean code structure for maintainability.",
  "Enhanced debugging and logical problem-solving skills."
],

futureEnhancements: [
  "MySQL Integration",
  "Spring Boot Backend",
  "REST APIs",
  "Role-Based Authentication",
  "Product Analytics Dashboard",
  "Cloud Deployment"
],

reflection:
  "Developing this project strengthened my understanding of Java fundamentals, object-oriented programming, and application design. It reinforced the importance of writing modular, maintainable code that can easily evolve into larger software systems.",
  },

  {
    id: 3,
    title: "Anti-Theft Flooring System",
     type: "IoT Research Project",
     image: "/projects/anti theft.png",
   

    technologies: [
      "IoT",
      "Sensors",
      "Arduino",
    ],

    problem:
      "Detects unauthorized movement using pressure sensors.",

    architecture: [
      "Sensor",
      "Controller",
      "Alert System",
    ],

    features: [
      "Movement Detection",
      "Alert Generation",
      "Research Publication",
    ],
    engineeringGoal:
  "Designed an IoT-based security solution capable of detecting unauthorized movement through pressure sensors and generating alerts to improve safety during the owner's absence.",

developmentJourney: [
  "Studied the security problem and identified suitable sensing components.",
  "Integrated pressure sensors with the microcontroller for movement detection.",
  "Configured the alert mechanism to trigger alarms and notifications.",
  "Tested different movement scenarios to improve detection reliability."
],

engineeringDecisions: [
  {
    title: "Pressure Sensor Detection",
    reason:
      "Selected pressure sensors to accurately detect physical movement over the protected area."
  },
  {
    title: "Microcontroller Processing",
    reason:
      "Used a microcontroller to process sensor input and control the alert mechanism efficiently."
  },
  {
    title: "Immediate Alert System",
    reason:
      "Designed the system to notify users immediately when suspicious movement is detected."
  },
  {
    title: "Modular Hardware Integration",
    reason:
      "Kept sensing, processing, and alert components independent for easier testing and future upgrades."
  }
],

skillsStrengthened: [
  "IoT Development",
  "Sensor Integration",
  "Embedded Systems",
  "Problem Solving",
  "Hardware–Software Integration",
  "System Testing",
  "Debugging",
  "Analytical Thinking"
],

challenges: [
  {
    challenge: "Detecting movement reliably without frequent false alarms.",
    solution:
      "Tested sensor sensitivity under different conditions and adjusted detection thresholds."
  },
  {
    challenge: "Integrating hardware components successfully.",
    solution:
      "Verified communication between sensors, controller, and alert system through repeated testing."
  },
  {
    challenge: "Ensuring timely alert generation.",
    solution:
      "Optimized the control logic to trigger notifications immediately after movement detection."
  },
  {
    challenge: "Maintaining stable system behavior during testing.",
    solution:
      "Performed multiple hardware validation cycles to improve reliability."
  }
],

learnings: [
  "Improved understanding of IoT system architecture.",
  "Learned practical sensor integration techniques.",
  "Strengthened debugging skills for hardware-software interaction.",
  "Understood the importance of testing real-world scenarios.",
  "Developed a broader perspective on embedded security solutions."
],

futureEnhancements: [
  "Mobile Application",
  "Cloud Monitoring",
  "AI-Based Detection",
  "Smart Camera Integration",
  "Real-Time Notifications",
  "Battery Backup"
],

reflection:
  "This project introduced me to the practical integration of hardware and software while strengthening my understanding of IoT system design. It highlighted the importance of reliable sensing, continuous testing, and building solutions that address real-world security challenges.",
  },
  
];

export type Project = (typeof projects)[number];
