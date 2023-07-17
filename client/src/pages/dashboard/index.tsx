import Container from '@/src/components/Container';
import Headings from '@/src/components/Headings';
import { ReactNode } from 'react';

const Dashboard = (): ReactNode => {
  return (
    <Container>
      <Headings option={'h1'} text={'Dashboard'} />
    </Container>
  );
};

export default Dashboard;
