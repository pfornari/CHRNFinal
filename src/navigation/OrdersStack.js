import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header.js'
import Orders from '../screens/Orders.js'



const Stack = createNativeStackNavigator()

const OrdersStack = () => {
    return (
      
         <Stack.Navigator
          initialRouteName='Orders'
          screenOptions={
              ({route})=>{
                  return {
                      header : () => <Header title={'Orders'}               />
                  }
              }
          }
      >
          <Stack.Screen name="Orders" component={Orders} />
          
          
        </Stack.Navigator>
     
    )
  }

export default OrdersStack

const styles = StyleSheet.create({})