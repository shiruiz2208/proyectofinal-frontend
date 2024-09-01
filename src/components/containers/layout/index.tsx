import { Header } from '@/components';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header title="Hoteleria" />
      <div>{children}</div>
    </>
  );
};

export default Layout;
