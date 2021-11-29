<template>
    <button
        class="co-app-button"
        v-if="text"
        @click="onButtonClick($event)"
    >
        {{text}}
    </button>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component({
        name: 'AppButton',
    })
    export default class AppButton extends Vue {
        @Prop() text!: string;

        onButtonClick(event: Event) {
            this.$emit('buttonClicked', event);
        }
    }
</script>

<style lang="scss" scoped>
    .co-app-button {
        border: 2px solid #000;
        background-color: $green;
        color: #000;
        padding: 15px 10px;
        border-radius: 5px;
        cursor: pointer;
        transition: $trans-3s;

        &:hover {
            border: 2px solid $green;
            background-color: #000;
            color: $green;
        }
    }
</style>
