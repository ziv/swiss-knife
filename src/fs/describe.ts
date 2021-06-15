import { Stats, constants } from 'fs';

const {
  S_IRUSR,
  S_IWUSR,
  S_IXUSR,
  S_IRGRP,
  S_IWGRP,
  S_IXGRP,
  S_IROTH,
  S_IWOTH,
  S_IXOTH,
  S_IFDIR,
  S_IFREG,
  S_IFCHR,
  S_IFBLK,
  S_IFIFO,
  S_IFLNK,
  S_IFSOCK
} = constants;

const MODES: number[] = [
  S_IRUSR,
  S_IWUSR,
  S_IXUSR, // owner
  S_IRGRP,
  S_IWGRP,
  S_IXGRP, // group
  S_IROTH,
  S_IWOTH,
  S_IXOTH // other
];
const TYPES: [number, string][] = [
  [S_IFREG, '-'],
  [S_IFDIR, 'd'],
  [S_IFLNK, 'l'],
  [S_IFIFO, 'p'],
  [S_IFSOCK, 's'],
  [S_IFBLK, 'b'],
  [S_IFCHR, 'c']
];

export default function describe({ mode }: Stats): string {
  const [, type] = TYPES.find(([t]) => t & mode) || [0, '.'];
  const modes = MODES.map((m, i) => (m & mode ? 'rwxrwxrwx'[i] : '-'));
  return type + modes.join('');
}
