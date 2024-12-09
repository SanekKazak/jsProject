export const fetchTasks = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: '2023-10-01 Task 1', description: 'Description 1' },
        { id: 2, title: '2023-10-02 Task 2', description: 'Description 2' },
      ]);
    }, 1000);
  });
};

export const fetchUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { email: 'user1@example.com', password: 'password1' },
        { email: 'user2@example.com', password: 'password2' },
      ]);
    }, 1000);
  });
};