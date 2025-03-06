import { useState, useCallback } from 'react';

export function useTitulo(tituloInicial = 'Coddara') {
  const [titulo, setTitulo] = useState(tituloInicial);

  const alterarTitulo = useCallback(() => {
    setTitulo((tituloAtual) => 
      tituloAtual === 'Coddara' ? 'SPA Lab' : 'Coddara'
    );
  }, []);

  return {
    titulo,
    alterarTitulo
  };
}
