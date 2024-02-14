import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { colors } from '../Global/colors'
import { useState } from 'react'
import { AntDesign, Entypo } from "@expo/vector-icons"
import BtnHome from './BtnHome';


const Search = ({ setKeyWord, navigation, route }) => {
    const [input, setInput] = useState("");
    const [error, setError] = useState("");
  
    const search = () => {
      const expression = /^(?=(?:\D*\d){0,2}\D*$)[A-Za-z0-9]+$/;
      if (!expression.test(input)) {
        setError("Invalid password");
      } else {
        setKeyWord(input);
        setError("")
      }
    };
  
    const removeItemSearch = () => {
      setInput("");
      setError("");
    };
  
  
    return (
      <View style={styles.container}>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            placeholder="Buscar producto"
            value={input}
            onChangeText={(t) => setInput(t)}
          />
          <TouchableOpacity onPress={search}>
            <AntDesign name="search1" color="black" size={25} />
          </TouchableOpacity>
          <TouchableOpacity onPress={removeItemSearch}>
            <Entypo name="circle-with-cross" color="black" size={25} />
          </TouchableOpacity>
          <BtnHome navigation={navigation} route={route}/>
          
        </View>
        {error ? <Text style={styles.errorInput}>{error}</Text> : null}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.violet,
      width: "100%",
      height: 70,
    },
    containerInput: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      alignContent: "center",
      alignItems: "center",
      paddingHorizontal: 10, 
    },
    input: {
      backgroundColor: colors.crema,
      width: "60%",
      borderWidth: 2,
      borderRadius: 5,
      paddingHorizontal: 10,
      paddingVertical: 5,
      margin: 10,
    },
    errorInput: {
      color: "red",
      paddingHorizontal: 10,
    },
  });
  
  export default Search;
  