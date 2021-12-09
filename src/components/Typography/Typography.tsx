import {Flex} from '@components/Flex';
import {styled, css} from '@stitches';

const text = css({
  color: 'rgba(255,255,255,1)',

  variants: {
    size: {
      // corrective letter-spacing and text-indent styles
      // should go here too, because they're determined by font-size.
      // You could also put line-height here too, if your devs prefer
      // a default line-height that works in some cases. But understand
      // that line-height is also a function of line-length, so the
      // default values here won't be optimal in many cases.
      1: {fontSize: '$1'},
      2: {fontSize: '$2'},
      3: {fontSize: '$3'},
      4: {fontSize: '$4'},
      5: {fontSize: '$5'},
      6: {fontSize: '$6'},
      7: {fontSize: '$7'},
      8: {fontSize: '$8'},
      9: {fontSize: '$9'},
    },
    // other variants like color, weight, style, line-height etc.
  },
});

export const Text = styled('span', text);

export const Paragraph = styled('p', text, {
  color: 'rgba(255,255,255,0.9)',
  fontSize: 'clamp(1rem, 1vw + 0.6rem, 1.25rem)',
});

export const ListItem = styled('li', text);
export const Small = styled('small', text);
export const Deleted = styled('del', text);

export const H1 = styled('h1', text, {
  fontWeight: '$500',
  fontSize: 'clamp(2rem, 1vw + 1.75rem, 3rem)',
});

export const H2 = styled('h2', text, {
  fontSize: 'clamp(1rem, 1vw + 0.75rem, 1.5rem)',
});

export const H3 = styled('h3', text);
export const H4 = styled('h4', text);
export const H5 = styled('h5', text);
export const H6 = styled('h6', text);

// declare additional styles where necessary
export const Ins = styled('ins', text, {textDecoration: 'none'});
export const Em = styled('em', text, {fontStyle: 'italic'});
export const Strong = styled('strong', text, {fontWeight: '$2'});
export const Mark = styled('mark', text, {backgroundColor: '$yellow3'});

// define additional variants where necessary
export const Link = styled('a', text, Flex, {
  userSelect: 'none',
  px: '$3',
  py: '$3',
  borderRadius: '0.8em',
  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  variants: {},
});

// then export a second layer of pre-formatted components
// for specific use-cases e.g. Title, SubHeading, Paragraph, Heading etc.
export const Title = styled('h1', {
  color: '$gray12',
  fontSize: '$8',
  lineHeight: '$8',
  '@bp2': {
    fontSize: '$9',
    lineHeight: '$9',
  },
});
