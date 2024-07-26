import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const PromiseAll = Promise.all([uploadPhoto(), createUser()]);
  PromiseAll
    .then(([first, second]) => console.log(`${first.body} ${second.firstName} ${second.lastName}`))
    .catch(() => console.error('Signup system offline'));
}
