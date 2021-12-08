import type * as Stitches from '@stitches/react';
import {css, config} from '@stitches';

type TCSS = Stitches.CSS<typeof config>;

const {space} = config.theme;
type TSpaceKey = keyof typeof space;

export const gap = (Object.keys(space) as Array<TSpaceKey>).reduce<
  Record<TSpaceKey, TCSS>
>(
  (acc, cv) => ({
    ...acc,
    [cv]: {$$stackGap: `$space$${cv}`},
  }),
  {} as any
);

export const Stack = css({
  display: 'flex',
  listStyleType: 'none',
  paddingLeft: 0,
  '> * + *': {
    marginTop: '$$stackGap',
  },
  variants: {
    gap,
  },
  defaultVariants: {
    gap: 4,
  },
});
