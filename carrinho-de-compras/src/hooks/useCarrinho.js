import { useState } from "react";

export function useCarrinho() {
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  const comprar = (preco) => {
    setSubtotal((prev) => prev + preco);
    setTotal((prev) => prev + preco);
  };

  return { subtotal, total, comprar };
}
