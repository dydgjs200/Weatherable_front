import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: '',
    default: 'project',
  },
  description: '4차 프로젝트',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        {children}
        </body>
    </html>
  )
}
