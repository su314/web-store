import product from "@/entity/product";
import CommonViewMixin from "@/mixin/common.view.mixin";
import { Component } from "vue-mixin-decorator";
import { Prop } from "vue-property-decorator";

@Component
export default class productCard extends CommonViewMixin{
    @Prop() product:product | undefined;
}