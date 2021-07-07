#!/usr/bin/env ts-node
import { sync as glob } from 'glob';
import { resolve } from 'path';

const root = resolve(__dirname, '..', 'src');

const files = glob('/**/*.md', { root })
  .map(path => path.replace(`${root}/`, ''))
  .reduce((acc, path) => {
    const [cat, name] = path.split('/');
    acc[cat] = acc[cat] ? [...acc[cat], name] : [name];
    return acc;
  }, {});

console.log({ root, files });
