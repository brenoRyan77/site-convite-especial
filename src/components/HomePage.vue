<template>
    <div class="banner">
        <div class="text-container">
            <p class="title font-hurricane">Janinne e Breno</p>
            <p class="date font-hurricane">05 de Outubro de 2024</p>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.banner {
    position: relative;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.banner::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("src/assets/images/foto-casal.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
    z-index: -1;
}

.text-container {
    text-align: center;
    color: white;
    z-index: 1;
    padding: 0 1rem;
}

.title {
    font-size: 3rem;
    margin: 0;
}

.date {
    font-size: 1.5rem;
    margin-top: 0.2rem;
}

.font-hurricane {
    font-family: Hurricane, cursive;
}

@media (max-width: 768px) {
    .title {
        font-size: 2rem;
    }

    .date {
        font-size: 1.2rem;
        margin-top: 0.1rem;
    }
}

@media (max-width: 480px) {
    .title {
        font-size: 1.5rem;
    }

    .date {
        font-size: 1rem;
        margin-top: 0.05rem;
    }
}
</style>