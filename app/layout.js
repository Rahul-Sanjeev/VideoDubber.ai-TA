// app/layout.js
import { MantineProvider } from '@mantine/core';
import './globals.css'; // Import global styles

export const metadata = {
  title: 'Vocal Remover',
  description: 'Separate voice from music with AI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
