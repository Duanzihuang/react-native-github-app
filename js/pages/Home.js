import React from 'react'

// 导入动态导航组件
import DynamicTabNavigator from '../navigators/DynamicTabNavigator'

export default class Home extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return <DynamicTabNavigator />
    }
}