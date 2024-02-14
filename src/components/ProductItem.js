import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'
import { useDispatch } from 'react-redux'
import {setProductSelected} from '../features/shop/shopSlice'

const ProductItem = ({item, navigation, route}) => {
  const dispatch = useDispatch()
  return (
    <Pressable style={styles.container} onPress={()=>{
      dispatch(setProductSelected(item.id))
      navigation.navigate("Product",{id:item.id})}} >
        <Image 
        style={styles.image}
        resizeMode="cover"
        source={{uri:item.thumbnail}}
        />
        <View style={styles.textContainer} >
      <Text style={styles.text} >{item.title} </Text>
      <Text style={styles.price} >$ {item.price} </Text>
      </View>
    </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    container:{
        width:"80%",
        backgroundColor: colors.red,
        marginHorizontal:"10%",
        marginVertical:10,
        paddingHorizontal:10,
        paddingVertical:15,
        borderRadius:6,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
        gap:20,
    },
    image:{
        width:120,
        height:120
    },
    text:{
        fontFamily:"Raleway-Thin",
        width:"80%"
    },
    price:{
        fontSize:28,
        color:colors.blue
    },
    textContainer:{
      width:"60%"
    }
})