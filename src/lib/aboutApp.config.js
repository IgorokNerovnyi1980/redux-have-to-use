export default {
  ru: {
    title1: 'Приветствую !!',
    text1: [
      {
        title: '',
        text: 'Это приложение предназначено для учебных целей. Здесь я показываю как использовать  Redux в связке с React. и Да - Вы можете использовать это приложение как шаблон для своих пэт проектов. В данный момент в приложении реализовано 4 паттерна - переключение табов, переключение темы оформления, авторизация  и асинхронное получение данных. Возможно, будут добавлены еще и другие решения.',
      },
    ],
    tableContentTitle1: 'Основные технологии',
    tableContentTitle2: 'Структура приложения',
    tableContentTitle3: 'Немного о стилистике кода',
    tableContenttext1: [
      {
        title: 'react',
        text: '',
      },
      {
        title: 'react-router',
        text: '',
      },
      {
        title: 'react-redux',
        text: '',
      },
      {
        title: 'redux-saga',
        text: '',
      },
      {
        title: 'axios',
        text: '',
      },
      {
        title: 'styled-components',
        text: '',
      },
      {
        title: 'moment.js',
        text: '',
      },
    ],
    tableContenttext2: [
      {
        title: null,
        text: '/public - ничего специального не содержит. Если используете в своих проектах замените title и файл favicon.ico.',
      },
      {
        title: null,
        text: '/src - содержит все части приложения и разделена на логические группы.',
      },
      {
        title: null,
        text: '/api - содержит файлы конфигурации для обращения к конкретному АПИ (урлы, запросы, токены пароль и т.д.).',
      },
      {
        title: null,
        text: '/assets - директория для файлов изображений  svg/png/jpg.',
      },
      {
        title: null,
        text: '/lib - директория для дополнительных файлов, конфигов и т.д.',
      },
      {
        title: null,
        text: '/components - здесь находятся многократно используемые UI компоненты ( кнопка , инпут, контейнер страницы, и т.д).',
      },
      {
        title: null,
        text: '/content  - каждый файл это контейнер для отображения какого либо контента на странице. В контейнер подключается вся логика и UI компоненты.',
      },
      {
        title: null,
        text: '/fonts - папка со шрифтами. шрифты добавлены для примера реализации приложения.',
      },
      {
        title: null,
        text: '/hooks - в этой директории расположены пользовательские хуки.',
      },
      {
        title: null,
        text: '/pages - компоненты для отображения страницы приложения.',
      },
      {
        title: null,
        text: '/redux - в этой директории находятся все компоненты для работы Redux  включая Saga.',
      },
      {
        title: null,
        text: '/styles - здесь все файлы, переменные  и конфигурации для работы со стилями и темами приложения.',
      },
      {
        title: null,
        text: '/Router.js - файл конфигурации страниц в приложении.',
      },
      {
        title: null,
        text: '/App.js - основной файл приложения.',
      },
      {
        title: null,
        text: '/index.js.',
      },
    ],
    tableContenttext3: [
      {
        title: null,
        text: 'Я придерживаюсь правил для написания разных типов файлов. для лучшего понимания кода опишу их ниже.',
      },
      {
        title: 'Часто используемые компоненты.',
        text: 'в верхней части записаны импорты и константы стилей. все пропы описаны через propTypes. все необязательные параметры описаны в default Prop. Не используйте напрямую  в этих компонентах. Хранилище, внутреннее состояние, или разметку с текстом. старайтесь не писать больше 200 строк кода в одном файле.',
      },
      {
        title: 'Компоненты из директории content.',
        text: 'такой компонент собирается из мелких UI компонентов, может содержать свои стили и состояние. Старайтесь вынести всю логику в хук для этого компонента. минимизируйте использование UI элементов , написанных внутри этого компонента. взвесьте все “за” и “против” перед использованием внутреннего состояния.',
      },
      {
        title: 'Хуки.',
        text: 'Не возвращайте разметку в хуке. я предпочитаю возвращать объект , где по названию ключа можно получить необходимый параметр. описывайте здесь всю логику (методы, данные из хранилища и тд)  для работы с определенным компонентом из директории content. Если вы пишите вспомогательный хук например useRouter.js  опишите в комментариях принцип работы и паттерны.',
      },
      {
        title: 'Страницы.',
        text: 'Такой компонент собирается из готовых контейнеров не пишите здесь логику и стили.',
      },
      {
        title: 'Стили.',
        text: 'Использование styled-components позволяет записывать стили прямо в компоненте, что избавляет проект от дополнительных файлов и папок. В этом приложении я умышленно использовал и компоненты, и классы и инлайн стили и анимацию  для того чтобы вы могли  убедится. styled-components это легко! Также, для примера , я добавил переменные и темы. Для того чтобы добавить новую тему вам необходимо добавить свой объект с цветами в файл переменных по примеру baseColors и darkColors. добавить его в экспорт и в файле с темами сконфигурируйте тему со своим набором цветов. Тема автоматически добавиться в селектор выбора темы и на страницу /themes-example.',
      },
      {
        title: 'Reducer.',
        text: 'для написания нового, скопируйте любой готовый, замените объект initialState, опишите свои кейсы, добавьте типы событий в файл types.js и экспортируйте свой редюсер в индекс файл.',
      },
      {
        title: 'Saga.',
        text: 'написание новой саги аналогично reducer , но саги более объемны и в зависимости от задачи могут кардинально отличаться. Будьте внимательны и читайте доки ))).',
      },
    ],
  },
  en: {
    title1: 'Greetings !!',
    text1: [
      {
        title: '',
        text: 'This application is intended for training purposes. Here I show how to use Redux in a bundle with React. And yes - you can use this application as a template for your PET projects. At the moment, 4 patterns are implemented in the appendix - switching tabs, switching the theme theme, authorization and asynchronous data obtaining. Perhaps other solutions will be added.',
      },
    ],
    tableContentTitle1: 'Main technologies',
    tableContentTitle2: 'Application structure',
    tableContentTitle3: 'About the the code style',
    tableContenttext1: [
      {
        title: 'react',
        text: '',
      },
      {
        title: 'react-router',
        text: '',
      },
      {
        title: 'react-redux',
        text: '',
      },
      {
        title: 'redux-saga',
        text: '',
      },
      {
        title: 'axios',
        text: '',
      },
      {
        title: 'styled-components',
        text: '',
      },
      {
        title: 'moment.js',
        text: '',
      },
    ],
    tableContenttext2: [
      {
        title: null,
        text: '/public - no special contains. If you use in your projects, replace title and favicon.ico file.',
      },
      {
        title: null,
        text: '/src - contains all parts of the application and divided into logical groups.',
      },
      {
        title: null,
        text: '/api - contains configuration files to appeal to a specific API (urls, requests, tokens password, etc.).',
      },
      {
        title: null,
        text: '/assets - directory for image files svg/png/jpg',
      },
      {
        title: null,
        text: '/lib - directory for additional files, configs, etc.',
      },
      {
        title: null,
        text: '/components - here are repeatedly used UI components (button, input, page container, etc.).',
      },
      {
        title: null,
        text: '/content  - each file is a container to display any content on the page. All logic and UI components are connected to the container.',
      },
      {
        title: null,
        text: '/fonts - fonts folder. Fonts are added to the implementation of the application.',
      },
      {
        title: null,
        text: '/hooks - in this directory there are custom hooks.',
      },
      {
        title: null,
        text: '/pages - components to display the application page.',
      },
      {
        title: null,
        text: '/redux - this directory contains all components for the Redux work including Saga.',
      },
      {
        title: null,
        text: '/styles - here all files, variables and configurations for working with styles and themes of the application.',
      },
      {
        title: null,
        text: '/Router.js - page configuration file in the application.',
      },
      {
        title: null,
        text: '/App.js',
      },
      {
        title: null,
        text: '/index.js - the main application file.',
      },
    ],
    tableContenttext3: [
      {
        title: null,
        text: 'I adhere to the rules for writing different types of files. For a better understanding of the code, I will describe them below.',
      },
      {
        title: 'Frequently used components.',
        text: 'Imports and styles constants are recorded at the top. All roses are described via PROPTYPES. All optional parameters are described in Default Prop. Do not use directly in these components. Storage, internal state, or marking with text. Try not to write more than 200 lines of code in one file.',
      },
      {
        title: 'Components from the Content directory.',
        text: 'Such a component is collected from small UI components, it may contain its styles and a state. Try to make all logic in a hook for this component. Minimize the use of UI elements written inside this component. Carefully consider the solution to use the local state in the component.',
      },
      {
        title: 'Hooks.',
        text: 'Do not return the markup in the hook. I prefer to return an object, where by the name of the key you can get the necessary parameter. Describe all logic here (methods, data from storage, etc.) to work with a specific component from the Content directory. If you write an auxiliary hook for example userouter.js Describe the principle of operation and patterns in the comments.',
      },
      {
        title: 'Pages.',
        text: 'Such a component is collected from ready-made containers Do not write logic and styles here.',
      },
      {
        title: 'Styles.',
        text: 'Using styled-components Allows you to record styles right in the component, which eliminates the project from additional files and folders. In this application, I deliberately used components, and classes and inline styles and animation so that you can see. styled-components is easy! Also, for example, I added variables and topics. To add a new topic, you need to add your object with the colors to the variable file following the example baseColors and darkColors. Add it to export and in the file with themes configure the topic with your set of colors. The topic is automatically added to the theme selector selector and the /themes-example page.',
      },
      {
        title: 'Reducer.',
        text: 'To write a new, copy any ready-made, replace the InitialState object, describe your cases, add event types to the types.js file and export your reduser to the index file.',
      },
      {
        title: 'Saga.',
        text: 'Writing a new saga similarly to reducer, but the saga more volume and, depending on the task, can differ dramatically. Be attentive and read the docks. )))',
      },
    ],
  },
}
