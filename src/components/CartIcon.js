import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const CartIcon = () => {
  return (
    <View style={styles.container} >
        <FontAwesome name='shopping-cart'
                            size={40}
                            color={"black"}/>
      <Text style={styles.text} >Cart</Text>
    </View>
  )
}

export default CartIcon

const styles = StyleSheet.create({
    container:{
        padding:5,
        margin:5,
        alignItems:"center",
        flexDirection:"column",
        gap:2,
        paddingTop:20
    },
    text:{
        fontFamily:"Raleway-Thin",
        paddingTop:5,
        fontSize:16
    }
})