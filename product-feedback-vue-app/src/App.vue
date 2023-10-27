<template>
    <HelloWorld />
    <base-button as="a" btnText="Add Feedback" intent="primary" href="https://fonts.google.com/" loading></base-button>
    <base-button btnText="Edit Feedback" intent="secondary" loading></base-button>
    <base-button btnText="Delete" intent="danger" loading></base-button>
    <base-button btnText="Cancel" intent="warning" loading></base-button>
</template>


<script>
import HelloWorld from './components/HelloWorld.vue'
import BaseButton from "./components/UI/BaseButton.vue";

export default {
    components: {
        HelloWorld, BaseButton
    }
}
</script>


