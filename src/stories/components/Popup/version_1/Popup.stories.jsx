import Popup from "./Popup"
import products from '../../../../../public/api/product.json'

export default {
    title: 'TE/Popup/version_1',
    component: Popup,
}

const product = products[0].products[0];

export const Default = {
    args: {
        productsData: product,
    }
}