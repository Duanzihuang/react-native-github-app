import React from 'react'
import { View, Text, Button } from 'react-native'

class Login extends React.Component {
    render() {
        return <View>
            <Text>登录页</Text>
            <Button title={'Login'} onPress={() => this.props.navigation.navigate('App')} />
        </View>
    }
}

export default Login