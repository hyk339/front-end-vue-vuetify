<!-- 컴포넌트 UI 정의 -->
<template>
  <v-card>
    <v-card-title>Margin and Padding</v-card-title>
    <v-card-text>
      <div class="yellow pa-3">
        <!-- a가 들어가면 전체 margin을 주는 것이다.-->
        <div class="indigo lighten-3 green--text ml-10 mr-5">
          Adjust screen size to see spacing changes
        </div>
        <div class="indigo lighten-3 green--text ml-10 mr-5 mt-5">
          Adjust screen size to see spacing changes
        </div>
        <div class="indigo lighten-3 green--text ma-3 pa-5">
          Adjust screen size to see spacing changes
        </div>
      </div>
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
