import {VisuallyHidden} from '@components/VisuallyHidden';
import {styled, css} from '@stitches';
import {SetStateAction} from 'react';

const StyledButton = styled('button', {
  all: 'unset',
  size: '40px',
  overflow: 'hidden',
  position: 'relative',
  zIndex: '4',

  '@bp2': {
    display: 'none',
  },
});

const Line = css({
  width: '100%',
  height: '2px',
  backgroundColor: '#fff',
  transition: '0.5s',
  position: 'absolute',
});

const Line1 = styled('span', Line, {
  transform: 'translateY(-10px)',
  variants: {
    active: {
      true: {
        transform: 'translateY(0) rotate(-45deg)',
      },
    },
  },
});

const Line2 = styled('span', Line, {
  variants: {
    active: {
      true: {
        transform: 'translateX(50px)',
      },
    },
  },
});

const Line3 = styled('span', Line, {
  transform: 'translateY(10px)',
  variants: {
    active: {
      true: {
        transform: 'translateY(0) rotate(45deg)',
      },
    },
  },
});

type Props = {
  state: boolean;
  onClick: React.Dispatch<SetStateAction<boolean>>;
};

export const MenuButton = ({state, onClick}: Props) => {
  return (
    <StyledButton onClick={() => onClick(!state)}>
      <VisuallyHidden>Menu</VisuallyHidden>
      <Line1 active={state} />
      <Line2 active={state} />
      <Line3 active={state} />
    </StyledButton>
  );
};
