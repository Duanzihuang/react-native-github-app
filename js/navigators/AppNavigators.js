import { createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

// 导入子组件
import Welcome from '../pages/Welcome'
import Home from '../pages/Home'

const InitNavigator = createStackNavigator({
    Welcome: {
        screen: Welcome,
        navigationOptions: {
            header: null
        }
    }
})

const MainNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    }
})

export default createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator
}, {
    initialRouteName: 'Init'
})