import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">404 - Página não encontrada</h1>
      <p className="text-gray-500">Ops! Parece que esta página não existe.</p>
      <a href="/" className="text-blue-500 underline mt-4">Voltar para a Home</a>
    </div>

    
  );
};

export default NotFoundPage;
