import { getRepository } from 'typeorm';
import { Users } from '../../entities/users/users.entity';

export const seedUsers = async () => {
  try {
    const users = [
      { id: 1, name: 'Gena', email: 'gena@gmail.com' },
      { id: 2, name: 'Vanya', email: 'vanya@gmail.com' },
      { id: 3, name: 'Senia', email: 'senia@gmail.com' },
      { id: 4, name: 'Igor', email: 'igor@gmail.com' },
      { id: 5, name: 'Stefan', email: 'stefan@gmail.com' },
      { id: 6, name: 'Stefen', email: 'stefen@gmail.com' },
      { id: 7, name: 'Yanus', email: 'yanus@gmail.com' },
      { id: 8, name: 'Timo', email: 'timo@gmail.com' },
      { id: 9, name: 'Darek', email: 'darek@gmail.com' },
    ];
    const usersRepo = getRepository(Users);
    await usersRepo.insert(users).then(d => console.log('Users inserted'));
  } catch (e) {
    // tslint:disable-next-line:no-console
    console.error(e);
  }
};
