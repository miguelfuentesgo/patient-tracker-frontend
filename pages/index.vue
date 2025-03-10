<template>
    <Banner />
    <h1 id="new-patient-form-title">Registra un nuevo paciente</h1>
    <NewPatientForm class="new-patient-form"/>
</template>

<style scoped lang="scss">

    h1 {
        justify-self: center;
        padding: 20px;
        padding-top: 120px;
    }

    .new-patient-form {
        padding-bottom: 120px;
    }
</style>

<script setup>

import Banner from '@/components/home/Banner'
import NewPatientForm from '@/components/register/NewPatientForm'

</script>