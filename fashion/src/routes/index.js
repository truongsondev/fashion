import Home from "@/pages/Home";
import Category from "@/pages/Category";
import NewItem from "@/pages/NewItem";
import DefaultLayout from "@/Component/Layout/DefaultLayout";
const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/category", component: Category, layout: DefaultLayout },
  { path: "/newItem", component: NewItem, layout: DefaultLayout },
];

export default publicRoutes;
