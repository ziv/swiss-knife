import { JSONValue } from '@/types/json';

export default function parse(input: string): JSONValue | undefined {
  try {
    return JSON.parse(input);
  } catch (_) {
    return undefined;
  }
}
