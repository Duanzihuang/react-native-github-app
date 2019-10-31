import React from 'react'
import { View, Text, Button } from 'react-native'

class Page1 extends React.Component {
    render() {
        const { navigation } = this.props
        return <View>
            <Text>Page1</Text>
            <Button title="Go Back" onPress={() => { navigation.goBack() }} />
            <Button title="跳转到Page4" onPress={() => { navigation.navigate('Page4') }} />
        </View>
    }
}

export default Page1