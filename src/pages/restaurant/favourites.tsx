import { asyncComponent } from "../../utils/asyncComponent";


export default asyncComponent(() => import('../../modules/restaurants/favourite'));