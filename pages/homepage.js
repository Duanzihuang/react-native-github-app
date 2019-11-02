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
            {/* <Button title="Go To Top Navigator" onPress={() => { navigation.navigate('Top') }} />
            <Button title="Go To Bottom Navigator" onPress={() => { navigation.navigate('Bottom') }} />
            <Button title="Go To Drawer" onPress={() => { navigation.navigate('Drawer') }} /> */}

            <Button title="Go To FlatListDemo" onPress={() => { navigation.navigate('FlatListDemo') }} />
            <Button title="Go To SectionListDemo" onPress={() => { navigation.navigate('SectionListDemo') }} />
        </View>
    }
}

export default HomePage