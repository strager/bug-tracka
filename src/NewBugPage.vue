<script setup>
import {addDraftBug} from './db.mjs';
import * as ulidx from 'ulidx';
import * as vueRouter from 'vue-router';
let router = vueRouter.useRouter();

let bug = {
    localID: ulidx.ulid(),
    title: '',
    description: '',
};

function save() {
    addDraftBug(bug);
    router.push({name: 'BugDetailsPage', params: {bugID: bug.localID}});
}
</script>

<template>
    <h1>new bug</h1>

    <p><label>title <input type="text" v-model="bug.title"></label></p>
    <p><label>description<br><textarea v-model="bug.description"></textarea></label></p>
    <p><button @click="save()">save</button></p>
</template>
