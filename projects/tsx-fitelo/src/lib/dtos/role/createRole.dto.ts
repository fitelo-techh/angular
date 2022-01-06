import {
  IsArray,
  IsString,
  validateOrReject
} from 'class-validator';

export class Permission {
  name: string;
  menu: boolean;
  view: boolean;
  add: boolean;
  edit: boolean;
  delete: boolean;


  constructor(name: string, menu: boolean, view: boolean, add: boolean, edit: boolean, remove: boolean) {
    this.name = name;
    this.menu = menu;
    this.view = view;
    this.add = add;
    this.edit = edit;
    this.delete = remove;
  }
}

export class CreateRoleDto {
  @IsString()
  name: string;

  @IsArray()
  permissions: Permission[];

  constructor(name: string, permissions: Permission[]) {
    this.name = name;
    this.permissions = permissions;
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
