<template>
    <table class="co-app-table">
        <thead class="co-app-table__thead">
        <tr>
            <th class="co-app-table__th"></th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td class="co-app-table__td">

            </td>
        </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component({
        name: 'AppTable',
    })
    export default class AppTable extends Vue {
    }
</script>

<style lang="scss" scoped>
    .co-app-table {
        border-collapse: collapse;
    }
</style>
