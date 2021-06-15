/**
 * Piping functions with single arguments
 *
 * @param funcs
 */
export default function pipe(...funcs) {
  return args => funcs.reduce((arg, fn) => fn(arg), args);
}
