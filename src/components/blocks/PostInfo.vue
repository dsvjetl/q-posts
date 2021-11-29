<template>
    <div class="co-post-info" v-if="postWithUser">
        <h1 class="h--35 co-post-info__title --bold">Post</h1>
        <div class="row">
            <span class="h--15 row__key --bold">Post title: </span>
            <span class="h--15 row__value">{{postWithUser.title}}</span>
        </div>
        <div class="row">
            <span class="h--15 row__key --bold">Post body: </span>
            <span class="h--15 row__value">{{postWithUser.body}}</span>
        </div>
        <div class="row">
            <span class="h--15 row__key --bold">User: </span>
            <span class="h--15 row__value">{{postWithUser.user.name}}</span>
        </div>
        <div class="row">
            <span class="h--15 row__key --bold">User email: </span>
            <span class="h--15 row__value">{{postWithUser.user.email}}</span>
        </div>
        <div class="row">
            <span class="h--15 row__key --bold">User company: </span>
            <span class="h--15 row__value">{{postWithUser.user.company.name}}</span>
        </div>
        <div class="row">
            <span class="h--15 row__key --bold">User website: </span>
            <span class="h--15 row__value">{{postWithUser.user.website}}</span>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';
    import {PostWithUserDTO} from '@/interfaces/dto/PostWithUserDTO';

    @Component({
        name: 'PostInfo',
    })
    export default class PostInfo extends Vue {
        @Prop() postWithUser!: PostWithUserDTO;
    }
</script>

<style lang="scss" scoped>
    .co-post-info {
        background-color: $grey-dark;
        margin: 30px 50px;
        padding: 15px 20px;
        border-radius: 10px;
        color: $green;
        width: fit-content;

        @include media('<=tablet') {
            width: 100%;
            margin: 0;
            border-radius: 0;
        }

        &__title {
            color: #fff;
            padding-bottom: 30px;
        }

        .row {
            padding-bottom: 20px;

            &__key {
                color: #fff;
            }
        }
    }
</style>
