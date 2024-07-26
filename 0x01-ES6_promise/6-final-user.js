import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(fistName, lastName, fileName) {
  const promises = [
    signUpUser(fileName, lastName),
    uploadPhoto(fileName),
  ];

  const results = await Promise.allSettled(promises);

  return results.map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason,
  }));
}
