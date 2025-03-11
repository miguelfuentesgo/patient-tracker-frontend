<template>
    <div class="page-container">
        <h1>Pacientes</h1>
        <PatientsTable/>
    </div>
</template>

<style lang="scss" scoped>
    .page-container {
        display: flex;
        flex-direction: column;
        height: 100dvh;
        margin: auto 50px; // Ocupa todo el viewport dinámico
    }

    h1 {
        align-self: center;
        padding: 20px;
    }


</style>

<script setup>
    import PatientsTable from '@/components/patients/PatientsTable'
</script>