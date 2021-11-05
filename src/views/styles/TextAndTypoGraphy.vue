<!-- 컴포넌트 UI 정의 -->
<template>
  <v-card>
    <v-card-title>TextAndTypography</v-card-title>
    <v-card-text>
      <div class="text-h1 yellow black--text">text-h1</div>
      <div class="text-h2 blue yellow--text">text-h2</div>
      <div class="text-h3 red lighten-4" >text-h3</div>
      <div class="text-h4 red--text text--lighten-4">text-h4</div>
      <div class="text-h5">text-h5</div>
      <div class="text-sm-h6 text-md-h4 text-lg-h2">text-h6</div>
      <div class="text-body-1">text-body-1</div>
    </v-card-text>

    <v-divider/>

    <v-card-text class="black--text">
      <p class="text-left">text-left</p>
      <p class="text-center">text-center</p>
      <p class="text-right">text-right</p>
      <p class="text-sm-left">text-sm-left</p>
      <p class="text-md-center">text-md-left</p>
      <p class="text-lg-right">text-lg-left</p>
      <p class="text-xl-center">text-xl-left</p>
    </v-card-text>

  </v-card>
</template>

<script>
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름)
  name: "TextAndTypography",
  //추가하고 싶은 컴포넌트를 등록
  components:{

  },
  //컴포넌트에서 사용하는 데이터를 정의
  data() {
    return {

    };
  },
  //컴포넌트에서 사용하는 메서드
  methods: {
    
  }
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>
