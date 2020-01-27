import { getRepository } from 'typeorm';
import { Roles } from '../../entities/roles/roles.entity';

export const seedRoles = async () => {
  try {
    const roles = [{ id: 1, name: 'SA' }];
    const rolesRepo = getRepository(Roles);
    await rolesRepo.insert(roles).then(d => console.log('Roles inserted'));
  } catch (e) {
    // tslint:disable-next-line:no-console
    console.error(e);
  }
};
