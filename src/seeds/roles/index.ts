import { getRepository } from 'typeorm';
import { Role } from '../../entities/role/role.entity';

export const seedRoles = async () => {
  try {
    const roles = { name: 'sa' };
    const rolesRepo = getRepository(Role);
    await rolesRepo.save(roles).then(d => console.log('Roles inserted'));
  } catch (e) {
    // tslint:disable-next-line:no-console
    console.error(e);
  }
};
