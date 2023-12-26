<script setup>
import {getBugDetailsByIDAsync} from "./db.mjs";

let props = defineProps(['bugID']);

let bug = await getBugDetailsByIDAsync(props.bugID);
</script>

<template>
    <h1>{{ bug.title }}</h1>
    <p>{{ bug.description }}</p>
</template>
