import { Component } from "vue-mixin-decorator";
import CommonLayout from "@/views/pageLayout/commonLayout/commonLayout.vue";
import CommonViewMixin from "@/mixin/common.view.mixin";
@Component({
    components: {
      CommonLayout,
    },
  })
export default class Profile extends CommonViewMixin{}
