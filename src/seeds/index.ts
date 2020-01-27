import { seedUsers } from './users/index';

export const seed = async () => {
  try {
    await seedUsers();
  } catch (e) {
    console.error(e);
  }
};
