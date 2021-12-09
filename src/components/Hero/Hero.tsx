import {Box} from '@components/Box';
import {Card} from '@components/Card';
import {Flex} from '@components/Flex';
import Arrow from '@components/icons/Icons';
import {H1, Link, Paragraph} from '@components/Typography';
import {styled} from '@stitches';
import Image from 'next/image';

const StyledHero = styled('section', Flex, {
  mt: '50px',
  mb: '100px',

  '@bpmax2': {
    gap: '$10',
  },
});

export const ImageContainer = styled('div', {
  width: 'min(600px, 100%)',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',

  '@bp2': {
    width: 'clamp(300px,50vw, 600px)',
  },
});

export const Hero = () => {
  return (
    <StyledHero cross="center" main="spaceBtw" flow="row" wrap="wrap">
      <Box
        css={{
          flexBasis: '100%',
          '@bp2': {flexBasis: '40%'},
        }}
      >
        <Flex flow="col" gap="5" css={{width: 'min(400px , 100%)'}}>
          <H1>Modern interior</H1>
          <Paragraph>
            A full-Service residential & commercial interior design and staging
            company offering professional organizing & eco-services
          </Paragraph>
          <Link center gap="2" css={{alignSelf: 'start'}}>
            Read more <Arrow />
          </Link>
        </Flex>
      </Box>
      <Box css={{position: 'relative'}}>
        <ImageContainer>
          <Image
            src="/images/photo1.png"
            alt="home interior design photo"
            width={600}
            height={400}
            quality={100}
            priority
          />
        </ImageContainer>
        <Box
          css={{
            position: 'absolute',
            left: 0,
            bottom: -100,
            width: '100%',
          }}
        >
          <Card />
        </Box>
      </Box>
    </StyledHero>
  );
};
