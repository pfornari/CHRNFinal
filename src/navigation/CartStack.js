import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header.js'
import Cart from '../screens/Cart.js'

const Stack = createNativeStackNavigator()

const CartStack = () => {
    return (
      
         <Stack.Navigator
          initialRouteName='Cart'
          screenOptions={
              ({route})=>{
                  return {
                      header : () => <Header title={'Cart'}               />
                  }
              }
          }
      >
          <Stack.Screen name="Cart" component={Cart} />
          
          
        </Stack.Navigator>
     
    )
  }

export default CartStack

