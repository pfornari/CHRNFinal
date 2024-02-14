import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../features/auth/authSlice';
import { deleteAllSession } from '../database';

const Header = ({title, navigation, route}) => {
  const dispatch = useDispatch()
  const localId = useSelector(state=>state.auth.value.localId)
  const onLogout = ()=>{
      deleteAllSession().then(result=>console.log(result))
      dispatch(clearUser())
  }

  return (
    <View style={styles.container} >
      <Text style={styles.text} >{title} </Text>
      {localId && <Pressable onPress={onLogout} style={styles.logoutIcon}>
        <AntDesign name="logout" size={24} color="black" />
      </Pressable>}
     
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    backgroundColor:colors.green,
    height: 110,
    width:"100%",
    paddingTop:20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection:"row"
  },
  text: {
    fontSize: 27,
    fontFamily:"Raleway-Bold",
    margin:30,
    fontWeight:"bold",
    textTransform:"uppercase",
  },
  btn:{
    margin:30
  },
  logoutIcon:{
    position:"absolute",
    right:10
  }
})