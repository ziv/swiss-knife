export type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };

export type JSONArr = JSONValue[];
export type JSONObj = Record<string, JSONValue>;
