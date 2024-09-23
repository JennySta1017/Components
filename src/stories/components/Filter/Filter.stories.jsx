import Filter from "./Filter";
import teaData from "../../../../public/api/product.json";
export default {
  title: "TE/Filter",
  component: Filter,
};

export const Default = {
  args: {
    title: "Filter",
    teaData: teaData,
  },
};
