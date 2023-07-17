import Container from '@/src/components/Container';
import Headings from '@/src/components/Headings';
import { getUserToken } from '@/src/utils';
import { ReactNode } from 'react';

const Sentimentify = (): ReactNode => {
  console.log(getUserToken());

  return (
    <Container>
      <Headings option={'h1'} text={'Sentimentify'} />
    </Container>
  );
};

export default Sentimentify;
