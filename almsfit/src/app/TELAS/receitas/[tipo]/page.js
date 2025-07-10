// app/receitas/[tipo]/page.js
import ReceitaClientComponent from './receitaCliente.js';

// Esta exportação deve ficar em um Server Component
export async function generateStaticParams() {
  return [
    { tipo: 'lombares' },
    { tipo: 'superiores' },
    { tipo: 'inferiores' },
    { tipo: 'cardiacos' },
    { tipo: 'iniciantes' },
    { tipo: 'idosos' }
  ];
}

// Mantenha como Server Component (sem 'use client')
export default function ReceitaPage({ params }) {
  const { tipo } = params;
  
  return <ReceitaClientComponent tipo={tipo} />;
}