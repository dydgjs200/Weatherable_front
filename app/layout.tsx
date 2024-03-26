import '../styles/global.scss';
import { Metadata } from 'next';
import Header from '../components/header';
import { Providers } from '../Store/provider';

export const metadata: Metadata = {
  title: {
    template: 'project',
    default: 'Weatherable',
  },
  description: '4차 프로젝트',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <Header />
          <div className="mainContaioner">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
