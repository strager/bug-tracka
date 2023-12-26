<script setup>
import * as vueRouter from 'vue-router';
import {RouterLink} from 'vue-router';
import {getAllBugsInfoAsync} from './db.mjs';
let router = vueRouter.useRouter();

let bugs = await getAllBugsInfoAsync();
</script>

<template>
    <h1>bugs</h1>
    <button @click="router.push({name: 'NewBugPage'})">new bug</button>
    <ul>
        <li v-for="bug in bugs">
            <RouterLink :to="{name: 'BugDetailsPage', params: {bugID: bug.id}}">{{ bug.title || '(untitled bug)' }}</RouterLink>
        </li>
    </ul>
</template>
