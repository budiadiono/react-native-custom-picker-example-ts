import { DrawerNavigator } from 'react-navigation'
import { BasicExample } from './screens/basic'
import { CustomExample } from './screens/custom'
import { InteractiveExample } from './screens/interactive'

export default DrawerNavigator({
  Basic: { screen: BasicExample },
  Custom: { screen: CustomExample },
  Interactive: { screen: InteractiveExample }
})
