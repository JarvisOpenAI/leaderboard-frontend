<template>
  <div></div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { getAllChallenges } from '@/api/host';

const router = useRouter();
getAllChallenges('present', 'approved', 'public', {
  page: 1,
}).then(
  (res) => {
    if (res?.results.length > 0) {
      router.push(`/challenge/detail/${res.results[0].id}`);
    } else {
      router.push(`/challenge`);
    }
  },
  (err) => {
    router.push(`/challenge`);
  }
);
</script>

<style></style>
