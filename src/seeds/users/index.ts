import { getRepository } from 'typeorm';
import { Users } from '../../entities/users/users.entity';

export const seedUsers = async () => {
  try {
    const users = [
      { id: 1, name: 'Gena', email: 'gena@gmail.com', roleId: 1 },
      { id: 2, name: 'Vanya', email: 'vanya@gmail.com', roleId: 1 },
      { id: 3, name: 'Senia', email: 'senia@gmail.com', roleId: 1 },
      { id: 4, name: 'Igor', email: 'igor@gmail.com', roleId: 1 },
      { id: 5, name: 'Stefan', email: 'stefan@gmail.com', roleId: 1 },
      { id: 6, name: 'Stefen', email: 'stefen@gmail.com', roleId: 1 },
      { id: 7, name: 'Yanus', email: 'yanus@gmail.com', roleId: 1 },
      { id: 8, name: 'Timo', email: 'timo@gmail.com', roleId: 1 },
      { id: 9, name: 'Darek', email: 'darek@gmail.com', roleId: 1 },
    ];
    const usersRepo = getRepository(Users);
    await usersRepo.insert(users).then(d => console.log('Users inserted'));
  } catch (e) {
    // tslint:disable-next-line:no-console
    console.error(e);
  }
};
