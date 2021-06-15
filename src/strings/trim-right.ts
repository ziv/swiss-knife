export default function trimRight(chars: string): (text: string) => string {
  const right = new RegExp(`[${chars}]+$`, 'g');
  return (text: string) => {
    return text.replace(right, '');
  };
}
