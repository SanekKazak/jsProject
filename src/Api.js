export const fetchTasks = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: 'task1', description: 'LALALA' },
          { id: 2, title: 'task2', description: 'BLABLABLA' },
        ]);
      }, 1000);
    });
  };
  
  export const fetchUsers = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { email: 'e@e', password: 'ps' },
          { email: 'e1@e', password: 'ps' },
        ]);
      }, 1000);
    });
  };