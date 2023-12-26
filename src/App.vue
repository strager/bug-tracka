<script setup>
import { RouterLink, RouterView } from 'vue-router'
import './db.mjs';
</script>

<template>
    <header>
        <nav>
            <RouterLink :to="{name: 'BugsPage'}">Bugs</RouterLink>
        </nav>
    </header>

    <Suspense>
        <RouterView />
        <template #fallback>
            loading
        </template>
    </Suspense>
</template>
