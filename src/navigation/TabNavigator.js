import ShopStack from './ShopStack'
import CartStack from './CartStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { colors } from '../Global/colors';
import OrdersStack from './OrdersStack';
import ShopIcon from '../components/ShopIcon';
import CartIcon from '../components/CartIcon';
import OrderIcon from '../components/OrdersIcon';
import ProfileStack from './ProfileStack';
import ProfileIcon from '../components/ProfileIcon';

const Tab = createBottomTabNavigator();


const TabNavigator = () => {
    return (

        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
            }}
        >
            <Tab.Screen
                name="ShopStack"
                component={ShopStack}
                options={{
                    tabBarIcon: () => <ShopIcon />
                }}
            />


            <Tab.Screen name="CartStack" component={CartStack}
                options={{
                    tabBarIcon: () => <CartIcon />
                }}
            />
            <Tab.Screen name="OrdersStack" component={OrdersStack}
                options={{
                    tabBarIcon: () => <OrderIcon />
                }}
            />
            <Tab.Screen name="ProfileStack" component={ProfileStack}
                options={{
                    tabBarIcon: () => <ProfileIcon />
                }}
            />
        </Tab.Navigator>

    )
}


export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.steelBlue,
        shadowColor: 'blue',
        paddingBottom:20,
        position: 'absolute',
        height: 110,
        opacity: 0.8,
        borderTopWidth:3,
        borderTopColor:"blue"
    }
})