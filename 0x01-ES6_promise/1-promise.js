/* eslint-disable no-unused-vars */
export default function getFullResponseFromAPI(success) {
  return new Promise((reslove, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
/* eslint-disable no-unused-vars */
