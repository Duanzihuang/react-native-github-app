export default class NavigatorUtil {
    static goBack(navigation) {
        navigation.goBack()
    }

    static goToPage(params, pageName) {
        const { navigation } = params

        navigation.navigate(pageName)
    }

    static goToHomePage(params) {
        const { navigation } = params

        navigation.navigate('Main')
    }
}