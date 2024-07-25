import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(fistName, lastName, fileName) {
  const usr = signUpUser(fileName, lastName);
  const file = uploadPhoto(fileName);

  return Promise.allSettled([usr, file])
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    })));
}
