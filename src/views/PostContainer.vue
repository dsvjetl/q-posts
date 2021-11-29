<template>
    <div class="co-post-container">
        <PostInfo :postWithUser="postWithUser"/>
        <div class="co-post-container__button-wrapper">
            <AppButton class="co-post-container__button" text="Back to Home" @buttonClicked="backToHome()"/>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import PostInfo from '@/components/blocks/PostInfo.vue';
    import {PostWithUserDTO} from '@/interfaces/dto/PostWithUserDTO';
    import AppButton from '@/components/elements/AppButton.vue';

    @Component({
        name: 'PostContainer',
        components: {AppButton, PostInfo},
    })
    export default class PostContainer extends Vue {
        private get currentRoute(): string {
            return this.$route.params.id;
        }

        get postWithUser(): PostWithUserDTO {
            return this.$store.getters.postWithUser;
        }

        created() {
            this.$store.dispatch('getPostWithUser', this.currentRoute);
        }

        destroyed() {
            this.$store.commit('clearPostWithUser');
        }

        backToHome() {
            this.$router.push({name: 'posts'});
        }
    }
</script>

<style lang="scss" scoped>
    .co-post-container {
        &__button-wrapper {
            @include media('<=tablet') {
                text-align: center;
            }
        }

        &__button {
            margin-left: 50px;

            @include media('<=tablet') {
                margin: 20px 0 0;
            }
        }
    }
</style>
