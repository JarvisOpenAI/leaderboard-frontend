<template>
  <div class="title mb24">{{ $t('challenge.challenge') }}</div>
  <div class="card mb24" v-for="item in raceInfo" :key="item" @click="goDetail(item)">
    <div class="left-con">
      <div class="second-title mb24">{{ $t(`race_${item.id}.title`) }}</div>
      <div class="describe mb24">{{ $t(`race_${item.id}.describe`) }}</div>
      <div class="flex-center">
        <div class="custom-tag">{{ $t('challenge.ongoing') }}</div>
        <div class="custom-tag">2023/04/01-2023/12/31</div>
      </div>
    </div>
    <div class="right-con"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const raceInfo = ref([
  {
    id: 100,
  },
  {
    id: 93,
  },
]);
const goDetail = (item) => {
  router.push(`/challenge/detail/${item.id}`);
};
</script>

<style lang="scss" scoped>
.card {
  min-height: 200px;
  background: linear-gradient(90deg, #282f3b 0%, #1d242e 100%);
  padding: 24px 16px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  .left-con {
    height: 100%;
    padding-left: 9px;
    .describe {
      line-height: 28px;
      min-height: 84px;
    }
  }
  .right-con {
    width: 439px;
    flex-shrink: 0;
    background: url(@/assets/images/race.png) no-repeat center;
    background-size: contain;
    margin-left: 93px;
  }
}
</style>
