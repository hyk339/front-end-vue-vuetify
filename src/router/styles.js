
export default [
  {
    path: "/styles/textandtypography",
    component: () => import(/* webpackChunkName: "styles" */ '../views/styles/TextAndTypoGraphy.vue')
  },
  {
    path: "/styles/spacing",
    component: () => import(/* webpackChunkName: "styles" */ '../views/styles/Spacing.vue')
  }
]