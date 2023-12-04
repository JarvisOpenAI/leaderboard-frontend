<template>
  <div class="flex-center mb16">
    <el-select v-model="curSplitId" :placeholder="$t('submission.phasePH')" @change="splitChange" style="width: 360px" class="mr16">
      <el-option v-for="item in splits" :key="item.id" :label="getSplitLabel(item)" :value="item.id" />
    </el-select>
    <el-checkbox :label="$t('leaderboard.orderScore')" name="type" v-model="isByScore" @change="splitChange"></el-checkbox>
  </div>

  <el-table :data="leaderboardList" stripe style="width: 100%" header-cell-class-name="thBg">
    <el-table-column fixed type="index" :label="$t('leaderboard.rank')" width="80" :index="(i) => (i + 1).toString().padStart(2, '0')" />
    <el-table-column sortable prop="submission__participant_team__team_name" :label="$t('leaderboard.team')" />
    <el-table-column sortable prop="filtering_score" :label="$t('leaderboard.score')" />
    <el-table-column
      sortable
      prop="submission__submitted_at"
      :label="$t('leaderboard.lastSubmission')"
      :formatter="
        (row) => {
          return formatTime(row.submission__submitted_at);
        }
      " />
  </el-table>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import { getPhaseSplit, getLeaderboard } from '@/api/challenge';
import { formatTime } from '@/utils/tool';

const props = defineProps(['raceId']);
const curSplitId = ref('');
const splits = ref([]);
const isByScore = ref(false);
const getSplitLabel = (item) => {
  return `Phase: ${item.challenge_phase_name},  Split: ${item.dataset_split_name}`;
};
onMounted(() => {
  getPhaseSplit(props.raceId).then((res) => {
    splits.value = res || [];
  });
});
const pager = reactive({
  total: 0,
  pageNum: 1,
  pageSize: 1000,
});
const leaderboardList = ref([]);
const splitChange = () => {
  getLeaderboard(curSplitId.value, { page_size: 1000, order_by: isByScore.value ? 'score' : undefined }).then((res) => {
    pager.total = res.count;
    leaderboardList.value = res.results || [];
  });
};
</script>

<style lang="scss" scoped></style>
