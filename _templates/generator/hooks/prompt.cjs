module.exports = [
  {
    type: 'input',
    name: 'dir',
    message: 'Where is the directory?',
    validate: (ans) => ans.startsWith('src/hooks'),
  },
  {
    type: 'input',
    name: 'hooksName',
    message: 'What is the name of hook?',
    validate: (ans) => /^use[A-Z]/.test(ans),
  },
  {
    type: 'confirm',
    name: 'needTests',
    message: 'Do you need a Test?',
    initial: true,
  },
];
