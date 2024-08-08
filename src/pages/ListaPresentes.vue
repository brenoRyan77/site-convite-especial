<template>
    <q-page class="q-pa-md">
        <div class="text-center">
            <h1 class="q-mb-md title-font">Lista de Presentes</h1>
            <p class="q-mb-lg description-font">Lista de presentes para o casamento</p>
            <div class="scrollable-container q-gutter-md">
                <div class="row q-col-gutter-md">
                    <div v-for="(present, index) in presents" :key="index" class="col-12 col-sm-6 col-md-3">
                        <div class="present-item q-pa-sm">
                            <q-img :src="present.photo" alt="Imagem do presente" class="present-image" />
                            <div class="present-details text-center">
                                <div class="present-name">{{ present.name }}</div>
                                <div class="present-price">{{ present.price }}</div>
                                <q-btn flat icon="add_shopping_cart" @click="addToCart(present)" class="q-mt-sm">
                                    Adicionar ao Carrinho
                                </q-btn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <q-btn @click="showCartModal = true" color="primary" class="q-mt-md q-position-relative">
                <q-icon name="shopping_cart" size="sm" />
                <q-badge :label="cart.length" color="negative" class="q-mr-xs" />
                Ver Carrinho
            </q-btn>
            <Carrinhoitem :show="showCartModal" @close="showCartModal = false" />
        </div>
    </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useCarrinhoStore } from 'src/stores/carrinhoStore'
import Carrinhoitem from 'src/components/CarrinhoItem.vue'
import { Notify } from 'quasar'

const presents = ref([
    { name: 'Panela de Pressão', photo: 'https://via.placeholder.com/150', price: 'R$ 200,00' },
    { name: 'Jogo de Facas', photo: 'https://via.placeholder.com/150', price: 'R$ 150,00' },
    { name: 'Jogo de Talheres', photo: 'https://via.placeholder.com/150', price: 'R$ 100,00' },
    { name: 'Aparelho de Jantar', photo: 'https://via.placeholder.com/150', price: 'R$ 250,00' },
    { name: 'Liquidificador', photo: 'https://via.placeholder.com/150', price: 'R$ 180,00' },
    { name: 'Frigideira Antiaderente', photo: 'https://via.placeholder.com/150', price: 'R$ 90,00' },
    { name: 'Jogo de Copos', photo: 'https://via.placeholder.com/150', price: 'R$ 75,00' },
    { name: 'Torradeira', photo: 'https://via.placeholder.com/150', price: 'R$ 120,00' },
])

const cartStore = useCarrinhoStore()
const showCartModal = ref(false)

const addToCart = (present) => {
    if (cartStore.cart.some(item => item.name === present.name)) {
        Notify.create({
            type: 'warning',
            message: `${present.name} já está no carrinho.`,
            position: 'top-right'
        })
        return
    }

    cartStore.addToCart(present)
    Notify.create({
        type: 'positive',
        message: `${present.name} adicionado ao carrinho.`,
        position: 'top-right'
    })
}

const cart = ref(cartStore.cart)
cartStore.$subscribe((mutation, state) => {
    cart.value = state.cart
})
</script>

<style scoped></style>