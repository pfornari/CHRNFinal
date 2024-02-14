import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ProfileIcon = () => {
  return (
    <View style={styles.container} >
       <MaterialCommunityIcons name='face-man-profile'
                            size={40}
                            color={"black"}/>
      <Text style={styles.text} >Profile</Text>
    </View>
  )
}

export default ProfileIcon

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