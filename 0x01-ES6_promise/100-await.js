import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const promises = [
    uploadPhoto(),
    createUser(),
  ];

  const results = await Promise.allSettled(promises);

  const response = {
    photo: results[0].status === 'fulfilled' ? results[0].value : null,
    user: results[1].status === 'fulfilled' ? results[1].value : null,
  };

  return response;
}
