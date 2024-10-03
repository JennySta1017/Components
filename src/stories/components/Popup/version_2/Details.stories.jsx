import Details from "./Details";
import products from '../../../../../public/api/product.json'

export default {
    title: 'TE/Popup/version_2/Details',
    component: Details,
}

const product = products[0].products[0];

export const Default = {
    args: {
        productsData: product,
    }
}