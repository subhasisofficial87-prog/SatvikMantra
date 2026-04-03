export const formatPrice = (price: number): string => {
  return `₹${price.toFixed(2)}`;
};

export const calculateSubtotal = (items: any[]): number => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

export const calculateShipping = (subtotal: number): number => {
  return subtotal > 1000 ? 0 : 100;
};

export const calculateTotal = (subtotal: number, shipping: number): number => {
  return subtotal + shipping;
};

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};
