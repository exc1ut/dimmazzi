import { asyncComponent } from '../../utils/asyncComponent'

export default asyncComponent(() => import('../../modules/restourant/RestourantView'))
