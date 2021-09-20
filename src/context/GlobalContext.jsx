const { createContext } = require('react')

export const GlobalContext = createContext({
  tasks: [
    {
      id: '1',
      title: 'title 1',
      description: 'some description',
      done: false,
    },
    {
      id: '2',
      title: 'title 2',
      description: 'some description 2',
      done: false,
    },
  ],
})
