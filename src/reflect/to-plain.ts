import { Type } from '@/types/types';
import { JSONObj } from '@/types/json';
import { GenericFunction } from '@/types/functions';

type ReturnValue = Record<string, JSONObj | GenericFunction>;

export default function toPlain<T = unknown>(
  type: Type<T>,
  instance: T
): ReturnValue {
  return Reflect.ownKeys(type.prototype).reduce(
    (obj, key: string) => ({ ...obj, [key]: instance[key].bind(instance) }),
    {}
  ) as ReturnValue;
}
