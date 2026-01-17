// lib/cart.ts - Gestión del carrito con localStorage

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image?: string;
  quantity: number;
}

export const getCart = (): CartItem[] => {
  if (typeof window !== "undefined") {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  }
  return [];
};

export const addToCart = (product: any, quantity: number = 1): CartItem[] => {
  const cart = getCart();
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: parseFloat(product.price),
      image: product.images[0]?.src,
      quantity: quantity,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  window.dispatchEvent(new Event("cartUpdated"));
  return cart;
};

export const removeFromCart = (productId: number): CartItem[] => {
  const cart = getCart().filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  window.dispatchEvent(new Event("cartUpdated"));
  return cart;
};

export const updateQuantity = (productId: number, quantity: number): CartItem[] => {
  const cart = getCart();
  const item = cart.find((item) => item.id === productId);
  if (item) {
    item.quantity = quantity;
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
  }
  return cart;
};

export const clearCart = (): void => {
  localStorage.removeItem("cart");
  window.dispatchEvent(new Event("cartUpdated"));
};

export const getCartTotal = (): number => {
  return getCart().reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
};

export const getCartCount = (): number => {
  return getCart().reduce((count, item) => count + item.quantity, 0);
};