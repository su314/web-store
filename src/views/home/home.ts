import { Component } from "vue-mixin-decorator";
import CommonLayout from "@/views/pageLayout/baseLayout/commonLayout.vue";
import CommonViewMixin from "@/mixin/common.view.mixin";
@Component({
    components:{
        CommonLayout
    }
})
export default class Home extends CommonViewMixin{

}
