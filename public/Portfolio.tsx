import { Details } from "@/components/HorizontalDisplay";
import cpf_logo from "./CpfLogo.png";
import cpf_team from "./CpfTeam.png";
import checkmate_logo from "./CheckmateLogo.svg";
import checkmate_team from "./CheckmateTeam.png";
import space_logo from "./SpaceLogo.png";
import space_team from "./SpaceTeam.png";
import healthierchoice_logo from "./HealthierchoiceLogo.png";
import healthierchoice_team from "./HealthierchoiceTeam.png";
import moblima_logo from "./MoblimaLogo.png";
import moblima_team from "./MoblimaTeam.png";
import shell_logo from "./ShellLogo.png";
import shell_team from "./ShellTeam.png";
import dotbot_logo from "./DotbotLogo.png";
import dotbot_team from "./DotbotTeam.png";
import lzk_logo from "./LowzhekaiLogo.png";
import lzk_team from "./LowzhekaiTeam.png";

export const jobs: Details[] = [
    {
        photograph: checkmate_team,
        subheader: 'Better.sg, Checkmate',
        logo: checkmate_logo,
        header: 'Software Engineer',
        date: 'August 2023 - Present',
        write_up: 'CheckMate is a Better.sg initiative that leverages AI and crowd-sourcining to minimise disinformation. Currently developing a fullstack web application integrated with Telegram. Using Node.js and Firebase for the backend',
        relevant_skills: ['Node.js', 'Firebase', 'Telegram Bots', 'Next.js'],
        color: "#552527",
        website_link: "https://checkmate.sg/"
      },
    {
      photograph: cpf_team,
      subheader: 'Central Provident Fund Board, BIA',
      logo: cpf_logo,
      header: 'Software Engineer',
      date: 'May 2023 - August 2023',
      write_up: 'Developed a question-answering system using Large Language Models (LLMs) and Langchain. Deployed API endpoints for internal usage, using Docker and Microsoft Azure. Led the development of a fullstack app to manage and test prompts using Next.js and FastAPI. Presented our solution directly to the EXCO of CPFB',
      relevant_skills: ['Python', 'Javascript', 'Langchain', 'FastAPI', 'Docker', 'Azure', 'Next.js'],
      color: "#1C2923",
      website_link: "https://www.cpf.gov.sg/"
    },
    {
      photograph: space_team,
      subheader: 'Space (MedTech)',
      logo: space_logo,
      header: 'Data Analyst',
      date: 'June 2022 - Dec 2022',
      write_up: 'Developed a ML model to detect crepitations in lung sounds, achieving 92% accuracy. Applied signal processing techniques, mathematics, data analysis and ML algorithms on real patient data. Proposed and implemented a novel detection method which reduced computational time by 40%',
      relevant_skills: ['Python', 'Machine Learning', 'Librosa', 'Pandas', 'Scikit-Learn', 'Signal Processing'],
      color: "#234444",
      website_link: "https://www.spacemedtech.com/"
    }
];

export const projects: Details[] = [
    {
      photograph: lzk_team,
      subheader: 'My personal portfolio website that you\'re on right now!',
      logo: lzk_logo,
      header: 'lowzhekai.com',
      date: '',
      write_up: 'In 2023, I decided to build my personal website as a fun project. I did not want simply use a template so I designed on Figma and brought my designs to life. I used Next 13 as it is a new but seamless framework that is becoming increasingly relevant. It\'s still a bit scrappy but it was a fun first attempt at web development',
      relevant_skills: ['Next.js', 'React.js', 'Typescript', 'Vercel', 'Material-UI', 'Figma'],
      color: "#433023",
      website_link: "http://www.lowzhekai.com/"
    },
    {
      photograph: dotbot_team,
      subheader: 'Designed a image-to-braille converter as part of the Renaissance Engineering Programme\'s flagship class, REDesign!',
      logo: dotbot_logo,
      header: 'Dot Bot',
      date: '',
      write_up: 'DotBot is a hardware-software solution ta print to braille device for the deaf-blind. It was built with Raspberry Pi, OCR Tesseract, OpenCV. This product was designed with CAD and built with 3D printed parts, and was done by myself and 5 other talented batchmates',
      relevant_skills: ['Pytesseract', 'Raspberry Pi', 'CAD'],
      color: "#202020",
      website_link: "https://github.com/REDesign-TBL-7/OCR"
    },
    {
      photograph: healthierchoice_team,
      subheader: 'My first ever experience at Software Engineering! Done as part of a SWE class at NTU.',
      logo: healthierchoice_logo,
      header: 'Healthier Choice',
      date: '',
      write_up: 'Developed a fullstack web application that helps users to search for healthier choice products. Worked on the Backend using Express.js and PostgreSQL (hosted on Heroku). Developed and deployed REST APIs to search, delete, insert and update the database',
      relevant_skills: ['Express.js', 'Node.js', 'PostgreSQL', 'Heroku'],
      color: "#282647",
      website_link: "https://youtu.be/TUjg1ZV1aAA"
    },
    {
      photograph: moblima_team,
      subheader: 'Movie booking app made following Object-Oriented Programming principals.',
      logo: moblima_logo,
      header: 'Moblima',
      date: '',
      write_up: 'Developed an application to computerise the process of making online booking and purchasing of movie tickets. Used OOP principals to manage dependencies between various classes. Used Git and Github for version control and collaboration',
      relevant_skills: ['Java', 'Object-Oriented Programming', 'Git', 'Github'],
      color: "#56564B",
      website_link: "https://www.youtube.com/watch?v=QQzN7IV0b7o&ab_channel=LowZheKai"
    },
    {
      photograph: shell_team,
      subheader: 'National and International Champions for Shell Imagine the Future Scenarios Competition.',
      logo: shell_logo,
      header: 'Shell Competition',
      date: '',
      write_up: 'This competition requires students to think about the future of energy and technology. We analysed global trends to conceptualise how Ho Chi Minh City would look like in 2050. I led my group of 7 to generate a report, showcase and presentation. Ultimately, we emerged victorious the National and International rounds of the competition',
      relevant_skills: ['Trend analysis', 'Presentation skills', 'Leadership'],
      color: "#552527",
      website_link: "https://www.ntu.edu.sg/admissions/undergraduate/premier-scholar-programmes/renaissance-engineering-programme/student-achievements/year-2022/shell-imagine-the-future-scenarios-regional-competition-2022"
    }
  ];
