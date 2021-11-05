<!-- 컴포넌트 UI 정의 -->
<template>
  <v-card>
    <v-card-title>Grid System</v-card-title>
    <v-card-text>

      <v-row>
        <!-- 언급이 안된 나머지는 12가 된다 -->
        <v-col class="red" cols="12" sm="2" md="6" lg="10">A</v-col>
        <v-col class="green" cols="12" sm="10" md="6" lg="2">B</v-col>
      </v-row>

      <v-row class="indigo lighten-3">
        <v-col cols="12" sm="2" md="6" lg="10">A</v-col>
        <v-col cols="12" sm="10" md="6" lg="2">B</v-col>
      </v-row>

    </v-card-text>
  </v-card>
</template>

<script>
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름)
  name: "",
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
