import { Component } from "vue-mixin-decorator";
import CommonLayout from "@/views/pageLayout/commonLayout/commonLayout.vue";
import CommonViewMixin from "@/mixin/common.view.mixin";
import ProductList from "@/components/productList/productList.vue";

@Component({
  components: {
    CommonLayout,
    ProductList
  },
})
export default class Products extends CommonViewMixin {}
