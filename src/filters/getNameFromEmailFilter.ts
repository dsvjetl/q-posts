import Vue from 'vue';

export const getNameFromEmailFilter = Vue.filter('getNameFromEmail', (email: string) => (
    email.split('@')[0]
));
