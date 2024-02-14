import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home.js'
import ItemListCategories from '../screens/ItemListCategories.js'
import ItemDetail from '../screens/ItemDetail.js'
import Login from '../screens/Login.js'
import Header from '../components/Header.js'


const Stack = createNativeStackNavigator()

const ShopStack = () => {
    return (
      
         <Stack.Navigator
          initialRouteName='Home'
          screenOptions={
              ({route})=>{
                  return {
                      header : () => <Header
                                              title={
                                          route.name === "Home" ? "Categories" :
                                          route.name === "Categories" ? route.params.category : "Detail"
                                          
                      }               />
                  }
              }
          }
      >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Categories" component={ItemListCategories} />
          <Stack.Screen name="Product" component={ItemDetail} />
          
        </Stack.Navigator>
     
    )
  }

export default ShopStack

const styles = StyleSheet.create({})