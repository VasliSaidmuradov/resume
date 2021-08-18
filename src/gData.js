// Структуру не менять

const gData = {
  goals: [
    "Ищу команду и место, где смогу максимально раскрыть свой потенциал.",
    "Развиваться профессионально и получать удовольствия не забывая о балансе.",
    "Реализовывать интересные и сложные проекты, выдавая отличный результат.",
    "Активно развиваюсь в своём стеке.",
  ],
  contacts: [
    {
      icon: "Envelope",
      text: "vasli.said@gmail.com",
      link: "mailto:vasli.said@gmail.com",
    },
    {
      icon: "Telephone",
      text: "+7 701 8009008",
      link: "tel:77018009008",
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
      "г.Алматы, Казахстан",
      `Опыт разработки ${getWorkExperienceTerm()}+ года`,
      { text: "GitHub", link: "https://github.com/VasliSaidmuradov" },
      { text: "Codewars", link: "https://www.codewars.com/users/Vasli" },
    ],
  },
  hobby: {
    title: "",
    list: [
      "🏃‍♂️ Бег (Trail running)",
      "🏓 Настольный теннис",
      "⛷️🏂 Учусь кататься на лыжах и сноуборде",
    ],
  },
  skills: {
    title: "",
    list: [
      "JavaScript",
      "Vue.js",
      "Nuxt.js",
      "React.js (изучаю)",
      // 'Next',
      "Gatsby (изучаю)",
      "TypeScript (изучаю)",
      "Git (GitHub, GitLab, Bitbucket)",
      "Webpack",
      "HTML/CSS",
      "Sass/Scss",
      "Npm/Yarn",
      "Postman, Swagger",
      "Figma",
      "Trello, Jira, Slack",
      "English B1 (Pre-intermediate)",
    ],
  },
  experience: {
    title: "",
    list: [
      {
        title: "Kaspi.kz",
        site: "https://kaspi.kz/",
        position: "Frontend developer",
        date: "Июнь 2021 - по настоящее время",
        list: [
          "Разработка инструментов для партнеров и менеджеров",
          "Верстка макетов из figma",
          "Рефакторинг кода и bugfix",
        ],
      },
      {
        title: "Creative",
        site: "https://crtweb.ru/",
        position: "Frontend developer",
        date: "Октябрь 2020 - Июнь 2021",
        list: [
          "Верстка макетов из figma",
          "Рефакторинг кода и bugfix",
          "Разработка компонентов на Vue.js",
          "Интеграция frontend c backend",
        ],
      },
      {
        title: "Brandstudio",
        site: "https://brandstudio.kz/",
        position: "Frontend developer",
        date: "Апрель 2020 - Октябрь 2020",
        list: [
          "Верстка макетов из figma",
          "Рефакторинг кода и bugfix",
          "Разработка компонентов на Vue.js(Nuxt)",
          "Интеграция frontend c backend",
        ],
      },
      {
        title: "Maint",
        site: "https://maint.kz/",
        position: "Frontend developer",
        date: "Март 2019 - Апрель 2020",
        list: [
          "Верстка макетов из photoshop",
          "Рефакторинг кода и bugfix",
          "Разработка компонентов на Vue.js(Nuxt)",
          "Интеграция frontend c backend",
        ],
      },
      // {
      //   title: 'В разные годы в разных компаниях',
      //   site: '',
      //   position: 'Системный админитсратор, менджер ИТ',
      //   date: '2007 - 2018',
      //   list: [],
      // },
    ],
  },
  education: {
    title: "",
    list: [
      {
        title: "КазНТУ им К.И. Сатпаева",
        site: "https://satbayev.university/ru",
        position: "Информационные технологии (компьютерные системы управления)",
        date: "2001 - 2006",
        list: [],
      },
    ],
  },
};

function getWorkExperienceTerm(startDate = "03.01.2019") {
  const now = new Date();
  const start = new Date(startDate);

  let year = now.getFullYear() - start.getFullYear();
  let month = now.getMonth() - 1 - start.getMonth();

  if (year <= 0 && month < 0) return 0;

  return month < 0
    ? `${year - 1}.${(year * 12 + month) % 12}`
    : month === 0
    ? `${year}`
    : `${year}.${month}`;
}
export default gData;
