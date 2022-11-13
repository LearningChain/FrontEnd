import { Dispatch, ReactNode, SetStateAction } from 'react';

export type PropsWithChildrenC<P = unknown, C = ReactNode> = P & {
  children: C;
};

export type StateAndAction<T, K extends string> = {
  [P in K]: T;
} & {
  [P in `set${Capitalize<K>}`]: Dispatch<SetStateAction<T>>;
};