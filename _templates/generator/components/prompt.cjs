module.exports = [
  {
    type: 'input',
    name: 'dir',
    message: 'Where is the directory?',
    validate: (ans) => /^src\/(components|features)/.test(ans),
  },
  {
    type: 'input',
    name: 'componentName',
    message: 'What is the name of component?',
    validate: (ans) => /^[A-Z]/.test(ans),
  },
  {
    type: 'confirm',
    name: 'haveProps',
    message: 'Is it have props?',
    initial: true,
  },
  {
    type: 'confirm',
    name: 'haveChildren',
    message: 'Is it have children?',
    initial: false,
  },
  {
    type: 'confirm',
    name: 'isPackage',
    message: 'Is it a package?',
    initial: false,
  },
  {
    type: 'confirm',
    name: 'needTests',
    message: 'Do you need a Test?',
    initial: true,
  },
  {
    type: 'confirm',
    name: 'needStories',
    message: 'Do you need a Storybook?',
    initial: true,
  },
];
