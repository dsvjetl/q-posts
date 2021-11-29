<template>
    <input
        type="text"
        class="co-app-input h--15"
        :placeholder="placeholder"
        @keyup="onKeyup()"
        v-model="inputText"
    >
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component({
        name: 'AppInput',
    })
    export default class AppInput extends Vue {
        @Prop({default: ''}) placeholder!: string;

        inputText = '';

        onKeyup() {
            this.$emit('onKeyup', this.inputText);
        }
    }
</script>

<style lang="scss" scoped>
    .co-app-input {
        padding: 5px 10px;
        color: #000;
        border-radius: 3px;
        border: 2px solid $green;

        &:focus {
            outline: none;
            border: 2px solid $grey-light;
        }
    }
</style>
