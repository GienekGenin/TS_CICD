import { getRepository } from 'typeorm';
import { User } from '../../entities/user/user.entity';

export const seedUsers = async () => {
  try {
    const users: User[] = [
      { name: 'Gena', email: 'gendos@gmail.com', roleId: 1 },
      { name: 'Vanya', email: 'vanya@gmail.com', roleId: 1 },
      { name: 'Senia', email: 'senia@gmail.com', roleId: 1 },
      { name: 'Igor', email: 'igor@gmail.com', roleId: 1 },
      { name: 'Stefan', email: 'stefan@gmail.com', roleId: 1 },
      { name: 'Stefen', email: 'stefen@gmail.com', roleId: 1 },
      { name: 'Yanus', email: 'yanus@gmail.com', roleId: 1 },
      { name: 'Timo', email: 'timo@gmail.com', roleId: 1 },
      { name: 'Darek', email: 'darek@gmail.com', roleId: 1 },
    ].map((el: User) => {
      const user = new User();
      user.name = el.name;
      user.email = el.email;
      user.roleId = el.roleId;
      return user;
    });
    const usersRepo = getRepository(User);
    await usersRepo.insert(users).then(d => console.log('Users inserted'));
  } catch (e) {
    // tslint:disable-next-line:no-console
    console.error(e);
  }
};
