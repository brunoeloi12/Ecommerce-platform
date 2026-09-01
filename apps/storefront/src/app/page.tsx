import { Button } from '@ecommerce/ui/button';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Storefront</h1>
        <p className="text-gray-500">
          Bem-vindo à zona de catálogo do nosso e-commerce. O design system está funcionando
          perfeitamente!
        </p>

        <div className="flex gap-4 justify-center pt-4">
          <Button variant="primary">Comprar Agora</Button>
          <Button variant="secondary">Saiba Mais</Button>
        </div>
      </div>
    </main>
  );
}
