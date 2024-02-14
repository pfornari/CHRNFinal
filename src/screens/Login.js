import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { colors } from '../Global/colors'
import SubmitButton from '../components/SubmitButton'
import { useLoginMutation } from '../app/services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import InputForm from '../components/InputForm'
import { insertSession } from '../database'

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [triggerLogin, { data, isError, isSuccess, error, isLoading }] = useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser(data));
      insertSession(data)
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    }
    if (isError) console.log(error);
  }, [data, isError, isSuccess]);

  const onSubmit = () => {
   
    setEmailError("");
    setPasswordError("");

    try {
      
      if (!email) {
        throw new Error("El correo electrónico es obligatorio.");
      }

      
      if (!password) {
        throw new Error("La contraseña es obligatoria.");
      }

      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error("El formato del correo electrónico no es válido.");
      }

      
      
      triggerLogin({ email, password });
    } catch (error) {
      
      switch (error.message) {
        case "El correo electrónico es obligatorio.":
          setEmailError(error.message);
          break;
        case "La contraseña es obligatoria.":
          setPasswordError(error.message);
          break;
        case "El formato del correo electrónico no es válido.":
          setEmailError(error.message);
          break;
        
        default:
          console.error("Error de validación no manejado:", error.message);
          break;
      }
    }
  };

  return (
    <View style={styles.main}>
      <Text style={styles.FirstTitle}>BestClothes</Text>
      <View style={styles.container}>
        <Text style={styles.title}>Login to start</Text>
        <InputForm
          label="Email"
          value={email}
          onChangeText={(t) => setEmail(t)}
          isSecure={false}
          error={emailError}
        />
        <InputForm
          label="Password"
          value={password}
          onChangeText={(t) => setPassword(t)}
          isSecure={true}
          error={passwordError}
        />
        <SubmitButton onPress={onSubmit} title="Enviar" />
        <Text style={styles.sub}>¿No tiene una cuenta?</Text>
        <Pressable onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.subLink}>Registrarse</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center"
  },
  FirstTitle:{
    paddingBottom:30,
    fontFamily:"Raleway-Medium",
    fontSize:50,
    paddingTop:20
  },
  container: {
    width: "90%",
    backgroundColor: colors.blue,
    gap: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20
  },
  title: {
    fontSize: 22,
    fontFamily: "Raleway-Black",
    color: "white"
  },
  sub: {
    fontSize: 14,
    fontFamily: "Raleway-Thin",
    color: "white"
  },
  subLink: {
    fontSize: 14,
    fontFamily: "Raleway-Thin",
    color: "blue"
  }
})