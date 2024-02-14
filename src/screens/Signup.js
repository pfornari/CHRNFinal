import {useEffect, useState } from 'react'
import { View, Text ,StyleSheet, Pressable} from 'react-native'
import SubmitButton from '../components/SubmitButton'
import { colors } from '../Global/colors'
import { useSignupMutation } from '../app/services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { signupSchema } from '../validations/signupSchema'
import InputForm from '../components/InputForm'
import { insertSession } from '../database'

const Signup = ({navigation}) => {
  const dispatch = useDispatch()
  const [triggerSignup,{data,isError,isSuccess,error,isLoading}] = useSignupMutation()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirmpasswordError, setConfirmPasswordError] = useState("")


  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser(data))
      insertSession(data)
        .then((result)=>console.log(result))
        .catch((err)=>console.log(err))
    }
    if (isError) console.log(error)
  }, [data, isError, isSuccess])



  const onSubmit = () => {
    try {
        setEmailError("")
        setPasswordError("")
        setConfirmPassword("")
        signupSchema.validateSync({email,password,confirmPassword})
        triggerSignup({email,password})
    } catch (error) {
        switch(error.path){
          case "email": 
            setEmailError(error.message)
            break
          case "password":
            setPasswordError(error.message)
            break
          case "confirmPassword":
            setConfirmPasswordError(error.message)
            break
          default:
            break  
        }

    }
  }


  return (
    <View style={styles.main}>
      <Text style={styles.FirstTitle}>AgroCompras</Text>
      <View style={styles.container}>
          <Text style={styles.title} >Registrarse</Text>
          <InputForm
            label="Correo Electrónico"
            value={email}
            onChangeText={(t) => setEmail(t)}
            isSecure={false}
            error={emailError}
          />
          <InputForm
            label="Contraseña"
            value={password}
            onChangeText={(t) => setPassword(t)}
            isSecure={true}
            error={passwordError}
          />
           <InputForm
            label="Confirmar contraseña"
            value={confirmPassword}
            onChangeText={(t) => setConfirmPassword(t)}
            isSecure={true}
            error={confirmpasswordError}

          />
          <SubmitButton title="Enviar" onPress={onSubmit}  
          />
          <Text style={styles.sub}>¿Ya tiene una cuenta?</Text>
          <Pressable onPress={()=> navigation.navigate("Ingreso")}>
              <Text style={styles.subLink}>Ingresar</Text>
          </Pressable>
      </View>
    </View>
  )
}


export default  Signup


const styles = StyleSheet.create({
    main:{
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:colors.green
    },
    FirstTitle:{
      paddingBottom:30,
      fontFamily:"Raleway-Bold",
      fontSize:45,
      paddingTop:20
    },
    container:{
      width:"90%",
      backgroundColor:colors.white,
      gap:15,
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
      paddingVertical:10
    },
    title:{
      fontSize:22,
      fontFamily:"Raleway-Black",
      color:"white"
    },
    sub:{
      fontSize:14,
      fontFamily:"Raleway-Bold",
      color:"white"
    },
    subLink:{
      fontSize:14,
      fontFamily:"Raleway-Bold",
      color:"blue"
    },
    error: {
      fontSize: 16,
      color: "red",
      fontFamily: 'Raleway-Bold',
      fontStyle: 'italic',
      marginLeft: 20,

    }
})