// Структуру не менять

const gData = {
  goals: [
    "Grow professionally and have fun without forgetting about balance.",
    "Implement interesting and complex projects, achieving excellent results.",
    "I am ready to transfer my passion for programming to a talented team of engineers to develop quality solutions.",
    "Actively develop in my stack.",
  ],
  contacts: [
    {
      icon: "Envelope",
      text: "vasli.said@gmail.com",
      link: "mailto:vasli.said@gmail.com",
    },
    {
      icon: "Cursor",
      text: "@vasli_o",
      link: "https://t.me/vasli_o",
    },
  ],
  aboutMe: {
    title: "",
    list: [
      "Almaty, Kazakhstan",
      `${getWorkExperienceTerm()}+ years of development experience`,
      { text: "GitHub", link: "https://github.com/VasliSaidmuradov" },
      { text: "LinkedIn", link: "https://www.linkedin.com/in/VasliSaidmuradov/" },
      { text: "Leetcode", link: "https://leetcode.com/VasliSaidmuradov/" },
      { text: "Codewars", link: "https://www.codewars.com/users/VasliSaidmuradov" },
    ],
  },
  hobby: {
    title: "",
    list: [
      "🏃‍♂️",
      "⛷️",
      "🏓",
      "📸",
    ], 
  },
  skills: {
    title: "",
    list: [
      "JavaScript",
      "Vue and ecosystem",
      "Git (GitHub, GitLab, Bitbucket)",
      "HTML/CSS",
      "Sass/Scss",
      "Npm/Yarn",
      "Figma",
      "Trello, Jira, Slack",
      "Jest, Cypress (limited expirience)", 
      "Storybook (limited expirience)",
      "React (limited expirience)",
      "TypeScript (limited expirience)",
      "Python (limited expirience)",
      "English B1-B2",
    ],
  },
  experience: {
    title: "",
    list: [
      {
        title: "Uzum",
        site: "https://uzum.com/",
        position: "Frontend developer",
        date: "June 2023 - current",
        list: [
          "We are developing an Internet Banking system for b2b/legal entities",
        ],
      },
      {
        title: "Kaspi.kz",
        site: "https://kaspi.kz/",
        position: "Frontend developer",
        date: "June 2021 - June 2023",
        list: [
          "With my team, we created a project for online partners who trade in the Kaspi store. They can create/edit/start/pause advertising campaigns and advertise their products in the kaspi store;",
          "We have created an internal tool (AWP - automated workplace) for bank managers to create and launch promotions for partners and customers of the store (marketplace) on Kaspi in a couple of clicks;",
          "Developed a section 'promotions with QR' of Kaspi pay app. Where parthers can get acquainted with the planned promotions and take part in which they want;"
        ],
      },
      {
        title: "Creative",
        site: "https://crtweb.ru/",
        position: "Pre-middle Frontend developer",
        date: "October 2020 - June 2021",
        list: [
          "Together with the team, we developed a section of a large platform for searching and posting vacancies;",
          "Managed to work for some time in a team where we created a product related to healthcare;",
          "Developed an updated menu for our company website;",
        ],
      },
      {
        title: "Brand Studio",
        site: "https://brandstudio.kz/",
        position: "Junior Frontend developer",
        date: "April 2020 - October 2020",
        list: [
          "Converting mockups from figma to websites, refactoring and bug fixing;",
          "Integration frontend with backend;",
        ],
      },
      {
        title: "Maint",
        site: "https://maint.kz/",
        position: "Intern Frontend developer",
        date: "March 2019 - April 2020",
        list: [
          "Created websites, landing pages in HTML and CSS from Photoshop;",
          "Converting mockups from photoshop to websites and created base vue components;",
        ],
      },
    ],
  },
  education: {
    title: "",
    list: [
      {
        title: "Satbaev University",
        site: "https://satbayev.university/ru",
        position: "Computer Systems: System engineer",
        date: "2001-2006",
        list: [],
      },
    ],
  },
};

function getWorkExperienceTerm(startDate = "03.01.2019") {
  const now = new Date();
  const start = new Date(startDate);

  const year = now.getFullYear() - start.getFullYear();
  const month = now.getMonth() - 1 - start.getMonth();

  if (year <= 0 && month < 0) return 0;

  return month < 0
    ? `${year - 1}.${(year * 12 + month) % 12}`
    : month === 0
    ? `${year}`
    : `${year}.${month}`;
}

export default gData;
