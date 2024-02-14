import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'
import CardShadow from '../Wrappers/CardShadow'
import { useDispatch } from 'react-redux'
import {setProductsFilteredByCategory} from '../features/shop/shopSlice'

const CategoryItem = ({category, navigation, route}) => {
    const dispatch = useDispatch()

  return (
    
      <Pressable navigation={navigation} route={route} onPress={()=>{dispatch(setProductsFilteredByCategory(category)) 
      navigation.navigate("Categories", {category})}}>
        <CardShadow style={styles.container}>
            <Text style={styles.text}>{category} </Text>
        </CardShadow>
      </Pressable>
   
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    container: {
        width:"80%",
        height:80,
        marginHorizontal:"10%",
        backgroundColor: colors.steelBlue,
        margin: 10,
        padding: 10,
        justifyContent:"space-around",
        alignItems:"center",
        borderRadius:45
    },
    text:{
        fontFamily:"Raleway-Thin",
        textTransform:"uppercase",
        fontSize:20
    }
})