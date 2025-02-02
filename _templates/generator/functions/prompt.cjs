module.exports = [
  {
    type: 'input',
    name: 'dir',
    message: 'Where is the directory?',
    validate: (ans) => ans.startsWith('src/utils'),
  },
  {
    type: 'input',
    name: 'functionName',
    message: 'What is the name of function?',
    validate: (ans) => /^[a-z]/.test(ans),
  },
  {
    type: 'confirm',
    name: 'needTests',
    message: 'Do you need a Test?',
    initial: true,
  },
];
