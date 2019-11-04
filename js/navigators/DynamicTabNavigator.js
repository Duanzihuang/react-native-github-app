import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { BottomTabBar, createBottomTabNavigator } from 'react-navigation-tabs'

// 导入子组件
import Popular from '../pages/Popular'
import Trending from '../pages/Trending'
import Favorite from '../pages/Favorite'
import My from '../pages/My'

// 导入字体图标
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

const TABS = {
    Popular: {
        screen: Popular,
        navigationOptions: {
            tabBarLabel: '最热',
            tabBarIcon: ({ tintColor, focused }) => (
                <MaterialIcons name="whatshot" size={26} style={{ color: tintColor }} />
            )
        }
    },
    Trending: {
        screen: Trending,
        navigationOptions: {
            tabBarLabel: '趋势',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons name="md-trending-up" size={26} style={{ color: tintColor }} />
            )
        }
    },
    Favorite: {
        screen: Favorite,
        navigationOptions: {
            tabBarLabel: '收藏',
            tabBarIcon: ({ tintColor, focused }) => (
                <MaterialIcons name="favorite" size={26} style={{ color: tintColor }} />
            )
        }
    },
    My: {
        screen: My,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor, focused }) => (
                <Entypo name="user" size={26} style={{ color: tintColor }} />
            )
        }
    }
}

export default class DynamicTabNavigator extends Component {
    _renderTabs = () => {
        const { Popular, Trending, Favorite, My } = TABS
        const tabs = { Popular, Trending, Favorite, My }

        // 可以动态的更改tabBar的设置
        // Popular.navigationOptions.tabBarLabel = '最新666'

        return createAppContainer(createBottomTabNavigator(tabs, {
            // 自定义tabBarComponent
            tabBarComponent: TabBarComponent
        }))
    }

    render() {
        const Tab = this._renderTabs()

        return <Tab />
    }
}

// 自定义tabBarComponent
class TabBarComponent extends Component {
    constructor(props) {
        super(props)

        this.theme = {
            tintColor: props.activeTintColor,
            updateTime: new Date().getTime()
        }
    }

    render() {
        const { routes, index } = this.props.navigation.state

        // console.log(routes, index)
        if (routes[index].params) {
            const { theme } = routes[index].params
            if (theme && theme.updateTime > this.theme.updateTime) {
                this.theme = theme
            }
        }

        return <BottomTabBar {...this.props} activeTintColor={this.theme.tintColor || this.props.activeTintColor} />
    }
}