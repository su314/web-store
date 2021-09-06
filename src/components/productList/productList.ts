import { Component } from "vue-mixin-decorator";
import productCard from "@/components/productList/productCard/productCard.vue";
import {productsData} from "@/assets/staticData/productsData";
import product from "@/entity/product";
@Component({ components: {
    productCard
} })
export default class productList {
    products:Array<product>=productsData;
}
