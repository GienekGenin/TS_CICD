import { seedRoles } from './roles/index';
import { seedUsers } from './users/index';

export const seed = async () => {
  try {
    await seedRoles();
    await seedUsers();
  } catch (e) {
    console.error(e);
  }
};
