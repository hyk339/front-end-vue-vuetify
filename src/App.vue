<!-- 컴포넌트 UI 정의 -->
<template>
  <v-app>
    <!-- permanent 속성때문에 계속 보인다. 없애보자-->
    <v-navigation-drawer app color="secondary" dark v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <!-- h6만큼 크기가 커지는구나-->
          <v-list-item-title class="text-h6"> Application </v-list-item-title>
          <v-list-item-subtitle> with Vue + Vuetify </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <!-- 수평선 들어가는 부분인데 빼자.-->
      <!-- <v-divider></v-divider>-->

      <v-list dense nav>
        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/about">
          <v-list-item-icon>
            <v-icon>mdi-help-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
     
        <!-- prepend는 아이콘 넣는것이다.-->
        <!-- :value라고 해서 javascript로 읽혀주자.-->
        <v-list-group :value="false" prepend-icon="mdi-palette-outline" active-class="yellow--text">
          <template v-slot:activator>
            <v-list-item-title>Styles</v-list-item-title>
          </template>
          <v-list-item to="/styles/textandtypography" color="white">
            <v-list-item-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Text And Typography</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/styles/spacing" color="white">
            <v-list-item-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Margin and Padding</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-item to="/styles/gridsystem">
          <v-list-item-icon>
            <v-icon>mdi-view-grid-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Grid System</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- component다. 이미 prop들이 설정되어있다.-->
    <!-- red, green과 같은 것은 material design에 이미 등록되어있어서 사용할수있다. -->
    <!-- 사용하는 prop이 이미 설정이 되어있다. docs가서 확인해야한다. -->
    <!-- 몇가지 테마가 있다. -->
    <!-- 아래처럼 app을 추가하면 아무리 내용이 많아도 스크롤을 내려도 위에 붙는다.-->
    <!-- dark하면 글자색이 흰색이 된다.-->
    <v-app-bar app color="secondary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Collapsing Bar</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app color="secondary" dark>
      <div class="mx-auto">H.Y.K</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름)
  name: "App",
  //추가하고 싶은 컴포넌트를 등록
  components: {},
  //컴포넌트에서 사용하는 데이터를 정의
  data() {
    return {
      drawer: false
    };
  },
  //컴포넌트에서 사용하는 메서드
  methods: {},
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped></style>
