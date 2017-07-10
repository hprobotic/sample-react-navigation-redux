import { StackNavigator } from 'react-navigation'
import Home from './scences/Home/HomeView'
import Counter from './scences/Counter/CounterView'

const AppNavigator = new StackNavigator(
  {
    Home: { screen: Home },
    Counter: { screen: Counter }
  }
)

export default AppNavigator