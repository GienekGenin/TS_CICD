import { seedUsers } from './users/index';
import { seedRoles } from './roles/index';

export const seed = async () => {
  try {
    await seedRoles();
    await seedUsers();
  } catch (e) {
    console.error(e);
  }
};
