import {MenuButton} from '@components/Buttons/MenuBtn';
import {Flex} from '@components/Flex';
import {styled} from '@stitches';
import {useState} from 'react';
import {Link} from './Nav';

const StyledHeader = styled('header', {
  // height: '100px',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  zIndex: '1',
});

const Nav = styled('nav', Flex, {
  width: '100%',
});

export const Header = () => {
  const [state, setState] = useState(false);

  return (
    <StyledHeader>
      <Nav as="nav" main="spaceBtw" cross="center">
        <Logo />
        <Link isActive={state} />
        <MenuButton state={state} onClick={setState} />
      </Nav>
    </StyledHeader>
  );
};

const StyledLogo = styled('div', {
  color: '#ffffff',
  display: 'inline-block',
  border: '1px solid #ffffff',
  padding: '$3',
  userSelect: 'none',
});

const Logo = () => {
  return <StyledLogo>THIS INTERIOR</StyledLogo>;
};
