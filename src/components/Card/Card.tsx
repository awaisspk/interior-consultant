import {Flex} from '@components/Flex';
import {ImageContainer} from '@components/Hero/Hero';
import {H2, Text} from '@components/Typography';
import Image from 'next/image';
import {styled} from '@stitches';

const Wrapper = styled('section', {
  width: 'min(400px, 80%)',
  backgroundColor: '$primary',
  boxShadow: '0 0 10px rgba(0,0,0,0.2)',
  padding: '$4 $5',
  position: 'absolute',
  bottom: '-20%',
  right: '10%',
});

export const Card = () => {
  return (
    <Wrapper>
      <Flex flow="col" gap="3">
        <Flex gap="4" cross="center">
          <Avatar />
          <Flex flow="col">
            <Text>Aliza Webber</Text>
            <Text>interior designer</Text>
          </Flex>
        </Flex>
        <H2>Design in 2020 by Aliza Webber</H2>
      </Flex>
    </Wrapper>
  );
};

export const Avatar = () => {
  return (
    <ImageContainer
      css={{width: '50px', borderRadius: '$full', overflow: 'hidden'}}
    >
      <Image
        src="/images/photo2.png"
        alt="user Profile pic"
        width={50}
        height={50}
      />
    </ImageContainer>
  );
};
