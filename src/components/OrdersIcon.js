import { StyleSheet, Text, View } from 'react-native'
import { Octicons } from '@expo/vector-icons'

const OrderIcon = () => {
  return (
    <View style={styles.container} >
       <Octicons name='list-unordered'
                            size={40}
                            color={"black"}/>
      <Text style={styles.text} >Orders</Text>
    </View>
  )
}

export default OrderIcon

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