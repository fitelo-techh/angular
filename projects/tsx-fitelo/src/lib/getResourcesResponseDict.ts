export interface Paging {
  limit: number;
  page: number;
  total: number;
}

export class PagingImp implements Paging {
  limit = 10;
  page = 0;
  total = 0;
}

export interface GetResourcesResponseDict {
  data: any;
  paging: Paging;
  query?: string;
}

export class GetResourcesResponse implements GetResourcesResponseDict {
  constructor(public data: any, public paging: Paging, public query?: string) {}
}
