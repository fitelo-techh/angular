import { Type } from 'class-transformer';
import {
  IsArray,
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  ValidateNested,
  validateOrReject,
} from 'class-validator';

export class Query {
  @IsString()
  @IsOptional()
  select: string;

  @IsString()
  @IsOptional()
  from: string;

  @IsString()
  @IsOptional()
  where?: string;

  @IsString()
  @IsOptional()
  orderBy?: string;

  constructor(select: string, from: string, where?: string, orderBy?: string) {
    this.select = select;
    this.from = from;
    this.where = where;
    this.orderBy = orderBy;
  }

  getCountSql() {
    let sql = `SELECT COUNT(*) AS value FROM ${this.from} `;
    if (this.where) sql += `WHERE ${this.where} `;
    return sql;
  }

  getSql(limit: number, page: number) {
    const skip = (page - 1) * limit;
    let sql = `SELECT ${this.select} FROM ${this.from} `;
    if (this.where) sql += `WHERE ${this.where} `;
    if (this.orderBy) sql += `ORDER BY ${this.orderBy} `;
    sql += `LIMIT ${skip}, ${limit}`
    return sql;
  }
}
export class Filter {
  @IsString()
  field: string;

  @IsString()
  @IsIn(['IN', 'LIKE', '=', '>=', '<=', 'NOT LIKE', '!='])
  operator: 'IN' | 'LIKE' | '=' | '>=' | '<=' | 'NOT LIKE' | '!=';

  value: any;

  constructor(field: string, operator: 'IN' | 'LIKE' | '=' | '>=' | '<=' | 'NOT LIKE' | '!=', value: any) {
    this.field = field;
    this.operator = operator;
    this.value = value;
  }
}

export class GetResourcesDto {
  @IsArray()
  @IsOptional()
  fields?: string[];

  @IsString()
  @IsOptional()
  @Matches(/^[+-].*/, {
    message: "sort must start with '+' or '-'",
    each: true,
  })
  sort?: string;

  @IsArray()
  @IsOptional()
  @ValidateNested()
  @Type(() => Filter)
  filters?: Filter[];

  @IsNumber()
  @IsOptional()
  limit?: number;

  @IsNumber()
  @IsOptional()
  page?: number;

  @IsOptional()
  @ValidateNested()
  @Type(() => Query)
  query?: Query;

  constructor() {
    this.filters = [];
    this.limit = 10;
    this.page = 1;
  }

  toParamsDict() {
    const dict: { [key: string] : any } = {};
    if (this.fields) dict['fields'] = JSON.stringify(this.fields);
    if (this.sort) dict['sort'] = JSON.stringify(this.sort);
    if (this.filters) dict['filters'] = JSON.stringify(this.filters);
    if (this.sort) dict['sort'] = JSON.stringify(this.sort);
    if (this.page) dict['page'] = JSON.stringify(this.page);
    if (this.query) dict['query'] = JSON.stringify(this.query);
    if (this.limit) dict['limit'] = JSON.stringify(this.limit);
    return dict;
  }

  fromParamsDict(params: any) {
    const { fields, sort, filters, limit, page, query } = params;
    if (fields) this.fields = JSON.parse(fields);
    if (sort) this.sort = JSON.parse(sort);
    if (filters) this.filters = JSON.parse(filters);
    if (limit) this.limit = JSON.parse(limit);
    if (page) this.page = JSON.parse(page);
    if (query) {
      const queryDict = JSON.parse(query);
      this.query = new Query(
        queryDict.select,
        queryDict.from,
        queryDict.where,
        queryDict.orderBy,
      )
    }
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
