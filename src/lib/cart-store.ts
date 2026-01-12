"use client";

export const getCart = () => {
  if (typeof window === "undefined") return [];
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

export const addToCart = (product: any) => {
  const cart = getCart();
  // We kijken of het product al in de mand zit
  const existingIndex = cart.findIndex((item: any) => item.id === product.id);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    // We voegen het product toe met aantal 1
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  // Belangrijk: dit seintje vertelt de rest van de site dat de mand is veranderd
  window.dispatchEvent(new Event("cart-updated"));
};
