import React from 'react'
import { View, Text, Button } from 'react-native'

class Page4 extends React.Component {
    render() {
        const { navigation } = this.props
        return <View>
            <Text>Page4</Text>
            <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
            <Button title="Close Drawer" onPress={() => navigation.closeDrawer()} />
            <Button title="Toggle Drawer" onPress={() => navigation.toggleDrawer()} />
        </View>
    }
}

export default Page4