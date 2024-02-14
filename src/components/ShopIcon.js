import { StyleSheet, Text, View } from 'react-native'
import {Fontisto} from '@expo/vector-icons'

const ShopIcon = () => {
  return (
    <View style={styles.container} >
        <Fontisto name='shopping-store'
                            size={40}
                            color={"black"} />
      <Text style={styles.text} >Shop</Text>
    </View>
  )
}

export default ShopIcon

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