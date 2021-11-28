import { Group, GroupState } from '../models/Group';
import { Service } from 'typedi';
import { Repository, EntityRepository } from 'typeorm';

@Service()
@EntityRepository(Group)
export class GroupRepository extends Repository<Group> {
  public findAll() {
    return this.find();
  }

  public findAllByNameAndCategory(name: string, categoryId?: number) {
    return this.createQueryBuilder('group')
      .innerJoin('group.techStacks', 'group_tech_stack')
      .innerJoin('group.category', 'category')
      .innerJoin('group.ownerInfo', 'user')
      .select([
        'group.id',
        'group.mentorId',
        'group.ownerId',
        'group.name',
        'group.maxUserCnt',
        'group.curUserCnt',
        'group.intro',
        'group.startAt',
        'group.endAt',
        'group.categoryId',
        'group.status',
      ])
      .addSelect(['group_tech_stack.techStackId', 'group_tech_stack.name'])
      .addSelect(['category.name'])
      .addSelect(['user.name', 'user.feverStack', 'user.avatarUrl', 'user.githubId'])
      .where('group.name like :filterdName', { filterdName: `%${name}%` })
      .andWhere('group.categoryId = :categoryId', { categoryId })
      .getMany();
  }

  public findAllByName(name: string) {
    return this.createQueryBuilder('group')
      .innerJoin('group.techStacks', 'group_tech_stack')
      .innerJoin('group.category', 'category')
      .innerJoin('group.ownerInfo', 'user')
      .select([
        'group.id',
        'group.mentorId',
        'group.ownerId',
        'group.name',
        'group.maxUserCnt',
        'group.curUserCnt',
        'group.intro',
        'group.startAt',
        'group.endAt',
        'group.categoryId',
        'group.status',
      ])
      .addSelect(['group_tech_stack.techStackId', 'group_tech_stack.name'])
      .addSelect(['category.name'])
      .addSelect(['user.name', 'user.feverStack', 'user.avatarUrl', 'user.githubId'])
      .where('group.name like :filterdName', { filterdName: `%${name}%` })
      .getMany();
  }

  public async findGroupDetailByGroupId(groupId: number) {
    return this.createQueryBuilder('group')
      .innerJoin('group.techStacks', 'ts')
      .innerJoin('group.groupEnrollments', 'ge')
      .innerJoin('ge.user', 'u')
      .select('group')
      .addSelect(['ts.techStackId', 'ts.name'])
      .addSelect(['ge.userId', 'ge.type'])
      .addSelect(['u.githubId', 'u.name', 'u.avatarUrl'])
      .where('group.id = :gid', { gid: groupId })
      .orderBy('ge.type', 'ASC')
      .getOne();
  }

  public findAllByOwnerId(ownerId: number) {
    return this.find({
      where: { ownerId },
    });
  }

  public findOneOrFailById(id: number) {
    return this.findOneOrFail(id);
  }
}
