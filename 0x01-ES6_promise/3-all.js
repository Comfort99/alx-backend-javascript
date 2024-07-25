import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([first, second]) => {
      console.log(`${first.body} ${second.firstName} ${second.lastName}`);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}
