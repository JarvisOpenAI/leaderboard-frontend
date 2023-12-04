<template>
  <div class="title">{{ $t('overview.view.title') }}</div>
  <div class="con">
    <p>{{ $t('overview.view.con1') }}</p>
    <p>{{ $t('overview.view.con2') }}</p>
    <p>{{ $t('overview.view.con3') }}</p>
    <p>{{ $t('overview.view.con4') }}</p>
    <p>{{ $t('overview.view.con5') }}</p>
  </div>
  <div class="title">{{ $t('overview.eval.title') }}</div>
  <div class="con">
    <p>{{ $t('overview.eval.con1') }}</p>
    <p>{{ $t('overview.eval.con2') }}</p>
  </div>
  <div class="title">{{ $t('overview.term.title') }}</div>
  <div class="con">
    <p class="subTitle">{{ $t('overview.term.con1') }}</p>
    <p>{{ $t('overview.term.con2') }}</p>
    <p class="subTitle">{{ $t('overview.term.sub1T') }}</p>
    <p>
      {{ $t('overview.term.sub1C1') }}
    </p>
    <p>
      {{ $t('overview.term.sub1C2') }}
    </p>
    <p class="subTitle">{{ $t('overview.term.sub2T') }}</p>
    <p>
      {{ $t('overview.term.sub2C1') }}
    </p>
    <p class="subTitle">{{ $t('overview.term.sub3T') }}</p>
    <p>
      {{ $t('overview.term.sub3C1') }}
    </p>
    <p>{{ $t('overview.term.con3') }}</p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.title {
  font-weight: 700;
  margin-bottom: 24px;
  font-size: 16px;
}
.con {
  line-height: 24px;
  margin-bottom: 32px;
  p {
    & + P {
      margin-top: 12px;
    }
  }
  .subTitle {
    font-weight: 600;
  }
}
</style>
