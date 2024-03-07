import '../styles/global.scss';
import { Metadata } from 'next';
import Header from '../components/header';

export const metadata: Metadata = {
  title: {
    template: '',
    default: 'project',
  },
  description: '4차 프로젝트',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <div className="mainContaioner">{children}</div>
      </body>
    </html>
  );
}
