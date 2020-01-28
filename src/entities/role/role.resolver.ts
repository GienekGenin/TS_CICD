import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RoleService } from './role.service';
import { RoleType } from './role.dto';
import { Role } from './role.entity';

@Resolver()
export class RoleResolver {
  constructor(private readonly roleService: RoleService) {}

  @Query(() => [RoleType])
  async roles(): Promise<Role[]> {
    return this.roleService.findAll();
  }
}
