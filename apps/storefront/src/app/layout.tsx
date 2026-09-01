import '@ecommerce/ui/styles';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Loja | Plataforma E-commerce',
  description: 'Catálogo de produtos',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-900 antialiased font-sans">{children}</body>
    </html>
  );
}
