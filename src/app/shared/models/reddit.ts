export class Reddit {
  data: Data;
  kind: string;
}

export class Data {
  children: Children[];
  dist: number;
}

export class Children {
  data: any;
  kind: string;
}
