import Vue from "vue";
import { Component } from "vue-mixin-decorator";
import CommonHeader from "@/components/header/header.vue";
import CommonFooter from "@/components/footer/footer.vue"
@Component({
    components:{
        CommonHeader,
        CommonFooter
    }
})
export default class CommonLayout extends Vue{
    
}