import { StyleSheet, View,Image, Text } from 'react-native'
import AddButton from '../components/AddButton'
import { useGetProfileImageQuery, useGetUserLocationQuery } from '../app/services/shopServices'
import { useSelector } from 'react-redux'
import { colors } from '../Global/colors'

const MyProfile = ({navigation}) => {
    const localId = useSelector(state => state.auth.value.localId)
    const {data} = useGetProfileImageQuery(localId)
    const {data:location} = useGetUserLocationQuery(localId)

  return (
    <View style={styles.container}>
        <Image
            source={data ? {uri:data.image} : require("../../assets/user.png")}
            style={styles.image}
            resizeMode='cover'
        />
        
        <AddButton title={"Agregar foto de perfil"} onPress={()=> navigation.navigate("ImageSelector")}/>
        <AddButton title={location? "Cambiar ubicación" : "Agregar ubicación"} onPress={()=> navigation.navigate("LocationSelector")}/>
        
    </View>
  )
}


export default MyProfile


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        paddingTop:20,
        backgroundColor:colors.steelBlue
    },
    image:{
        width:200,
        height:200
    }
})