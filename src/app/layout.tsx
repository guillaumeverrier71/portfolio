import './globals.css';

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio de Guillaume VERRIER',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
