import React from 'react'
import { View, Text, Button } from 'react-native'

class HomePage extends React.Component {
    static navigationOptions = {
        title: '首页',
        headerBackTitle: () => '返回'
    }
    render() {
        const { navigation } = this.props
        return <View>
            <Text>HomePage</Text>
            <Button title="Go To Page1" onPress={() => { navigation.navigate('Page1', { name: '动态的' }) }} />
            <Button title="Go To Page2" onPress={() => { navigation.navigate('Page2') }} />
            <Button title="Go To Page3" onPress={() => { navigation.navigate('Page3', { title: '动态的3' }) }} />
        </View>
    }
}

export default HomePage