import {
  IsArray,
  IsNumber,
  IsString,
  validateOrReject
} from 'class-validator';

export class CreateTeamDto {
  @IsString()
  name: string;

  @IsNumber()
  teamLeader: number;

  @IsArray()
  @IsNumber({}, { each: true })
  memberIds: number[];

  constructor(name: string, teamLeader: number, ids: number[]) {
    this.name = name;
    this.teamLeader = teamLeader;
    this.memberIds = ids;
  }

  async validate() {
    try {
      await validateOrReject(this);
      return true;
    } catch (errors) {
      console.log('Dto Validation Failed. Errors: ', errors);
      return false;
    }
  }
}
