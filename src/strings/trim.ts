import trimLeft from './trim-left';
import trimRight from './trim-right';

export default function trim(chars: string): (text: string) => string {
  const left = trimLeft(chars);
  const right = trimRight(chars);
  return (text: string) => left(right(text));
}
