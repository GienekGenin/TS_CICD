import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class RoleType {
  @Field()
  readonly id?: number;
  @Field()
  readonly name?: string;
}
