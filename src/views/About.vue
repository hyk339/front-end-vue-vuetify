<!-- 컴포넌트 UI 정의 -->
<template>
  <v-card class="mx-auto" width="500">
    <v-img src="@/assets/photos/photo3.jpg" height="150px"/>
    <v-card-title>About</v-card-title>
    <v-card-subtitle>This is an about page</v-card-subtitle>

  <v-card-text>
    The v-card component is a versatile component that can be used for anything from a panel
  </v-card-text>
 

  <v-card-text>
    The card component has numerous helper components to make markup as easy as possible.
  </v-card-text>
  <v-card-actions>
    <div class="mx-auto">
      <v-btn class="mr-2" color="success">OK</v-btn>
      <v-btn color="info" text>Cancel</v-btn>
    </div>
  </v-card-actions>
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
