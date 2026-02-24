// api.js
export async function fetchDummyUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) {
        reject(new Error('User ID is required'));
      } else {
        resolve({ id, name: 'Test User', role: 'admin' });
      }
    }, 100); // 100ms fake delay
  });
}
