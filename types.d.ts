type Color = string;
type Mixed = any;

type Diff<T extends string, U extends string> = ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T];
type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;
// type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> };