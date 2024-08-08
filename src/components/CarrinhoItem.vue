<template>
    <q-dialog v-model="showCartModal" persistent>
        <q-card class="q-pa-sm modal-card" style="width: 90vw; max-width: 500px;">
            <q-card-section class="modal-header bg-lightnude">
                <h2 class="text-h6">Itens no Carrinho</h2>
            </q-card-section>
            <q-card-section>
                <q-list>
                    <q-item v-for="(item, index) in cart" :key="index" class="q-mb-xs item-container">
                        <q-item-section avatar>
                            <q-img :src="item.photo" alt="Imagem do presente" class="cart-item-image" />
                        </q-item-section>
                        <q-item-section>
                            <div class="cart-item-name">{{ item.name }}</div>
                            <div class="cart-item-price">{{ item.price }}</div>
                        </q-item-section>
                        <q-item-section side>
                            <q-btn flat icon="delete" @click="removeFromCart(index)" color="negative" size="sm" />
                        </q-item-section>
                    </q-item>
                </q-list>
                <q-separator />
                <div class="total-container q-mt-md">
                    <div class="total-label">Total:</div>
                    <div class="total-value">R$ {{ totalPrice }}</div>
                </div>
            </q-card-section>
            <q-card-actions class="q-pa-sm flex justify-between">
                <q-btn flat label="Finalizar Compra" @click="finalizePurchase" color="secondary" class="q-mr-md" />
                <q-btn flat label="Fechar" @click="closeModal" color="primary" />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useCarrinhoStore } from 'src/stores/carrinhoStore'

const props = defineProps({
    show: Boolean
})

const emit = defineEmits(['close'])

const cartStore = useCarrinhoStore()
const showCartModal = ref(props.show)

const removeFromCart = (index) => {
    cartStore.removeFromCart(index)
}

const totalPrice = computed(() => cartStore.totalPrice)
const cart = computed(() => cartStore.cart)

const closeModal = () => {
    showCartModal.value = false
    emit('close')
}

const finalizePurchase = () => {
    closeModal()
}

watch(() => props.show, (newVal) => {
    showCartModal.value = newVal
})
</script>

<style scoped></style>