import Container from '@/components/Container';
import Headings from '@/components/Headings';
import { ReactNode } from 'react';

const SignIn = (): ReactNode => {
  return (
    <Container>
      <Headings option={'h1'} text={'Sign In'} />
    </Container>
  );
};

export default SignIn;
