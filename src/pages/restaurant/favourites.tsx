import { withAuth } from '../../hoc/withAuth'
import { asyncComponent } from '../../utils/asyncComponent'

export default withAuth(
  asyncComponent(() => import('../../modules/restaurants/FavouriteRestaurant'))
)
