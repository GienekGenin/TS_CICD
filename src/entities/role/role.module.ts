import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './role.entity';
import { RoleService } from './role.service';
import { RoleResolver } from './role.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  controllers: [],
  providers: [RoleService, RoleResolver],
  exports: [TypeOrmModule],
})
export class RolesModule {}
