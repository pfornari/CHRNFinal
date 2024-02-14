import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from "@expo/vector-icons"
import Home from '../screens/Home'

const BtnHome = ({navigation, route}) => {
    
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Ionicons name="md-home" size={24} color="black" />
        </TouchableOpacity>
    )
}

export default BtnHome

const styles = StyleSheet.create({})