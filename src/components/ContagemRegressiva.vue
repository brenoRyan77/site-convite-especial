<template>
    <div class="text-center bg-lightnude" style="width: 100%; height: 250px;">
        <h6 class="q-mb-md title">Contagem Regressiva</h6>
        <div class="countdown-container">
            <div v-for="(item, index) in countdownItems" :key="index" class="countdown-box">
                <div class="countdown-value">{{ item.value }}</div>
                <div class="countdown-label">{{ item.label }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const endDate = new Date('2024-10-05T00:00:00');
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const countdownItems = ref([
    { value: days, label: 'Dias' },
    { value: hours, label: 'Horas' },
    { value: minutes, label: 'Minutos' },
    { value: seconds, label: 'Segundos' },
]);

const updateCountdown = () => {
    const now = new Date();
    const timeDiff = endDate - now;

    if (timeDiff <= 0) {
        days.value = 0;
        hours.value = 0;
        minutes.value = 0;
        seconds.value = 0;
        return;
    }

    days.value = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    hours.value = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.value = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    seconds.value = Math.floor((timeDiff % (1000 * 60)) / 1000);

    countdownItems.value = [
        { value: days.value, label: 'Dias' },
        { value: hours.value, label: 'Horas' },
        { value: minutes.value, label: 'Minutos' },
        { value: seconds.value, label: 'Segundos' },
    ];
};

onMounted(() => {
    updateCountdown();
    setInterval(updateCountdown, 1000);
});
</script>

<style scoped>
.title {
    font-size: 2rem;
    font-family: 'Hurricane', cursive;
    font-weight: 200;
}

.countdown-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin: 0;
}

.countdown-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 7rem;
    height: 7rem;
    background-color: black;
    color: white;
    font-size: 2rem;
    border-radius: 0.5rem;
    position: relative;
    padding: 2rem;
}

.countdown-value {
    font-size: 2.5rem;
    font-weight: bold;
}

.countdown-label {
    font-size: 0.8rem;
}

@media (max-width: 600px) {
    .countdown-box {
        width: 4rem;
        height: 4rem;
    }

    .countdown-value {
        font-size: 2rem;
    }

    .countdown-label {
        font-size: 0.9rem;
    }
}
</style>