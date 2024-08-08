import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCarrinhoStore = defineStore("carrinho", () => {
  const cart = ref([]);

  const addToCart = (item) => {
    cart.value.push(item);
  };

  const removeFromCart = (index) => {
    cart.value.splice(index, 1);
  };

  const totalPrice = computed(() => {
    return cart.value
      .reduce((total, item) => {
        const price = parseFloat(
          item.price.replace("R$ ", "").replace(",", ".")
        );
        return total + price;
      }, 0)
      .toFixed(2)
      .replace(".", ",");
  });

  return { cart, addToCart, removeFromCart, totalPrice };
});
