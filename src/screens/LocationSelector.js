import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AddButton from '../components/AddButton'
import * as Location from 'expo-location'
import MapPreview from '../components/MapPreview'
import { googleApi } from '../firebase/googleApi'
import { usePostUserLocationMutation } from '../app/services/shopServices'
import { useSelector } from 'react-redux'

const LocationSelector = ({navigation}) => {
    const localId = useSelector(state=>state.auth.value.localId)
    const [location, setLocation] = useState({latitude:"", longitude:""})
    const [errorMsg, setErrorMsg] = useState(null)
    const [address, setAddress] = useState("")
    const [triggerPostUserLocation] = usePostUserLocationMutation()

    useEffect(() => {
        (async()=>{
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setErrorMsg('Permiso denegado para acceder a la ubicación')
                return
            }
            let location = await Location.getCurrentPositionAsync({})
            setLocation({latitude:location.coords.latitude, longitude:location.coords.longitude})
        })()
      
    }, [])

    useEffect(()=>{
        (async()=>{
            try {
                if(location.latitude){
                const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${googleApi.mapStatic}`)
                const data = await response.json()
                setAddress(data.results[0].formatted_address)
            }
            } catch (error) {
                setErrorMsg(error.message)
            }
          
        })()
    },[location])

    const onConfirmDirection = async ()=> {
        try {
            const locationFormatted = {
                address,
                ...location
            }
            const data = await triggerPostUserLocation({localId,locationFormatted})
            navigation.goBack()
        }catch(error){
            setErrorMsg(error.message)
        } 
        
    }
    
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{console.log(location)}</Text>
      <Image style={styles.image} source={require("../../assets/map.jpg")}/>
      <Text>longitude:{location.longitude} </Text>
      <Text>latitude:{location.latitude} </Text>
      <AddButton title="Confirmar ubicación" onPress={onConfirmDirection}/>
    </View>
  )
}

export default LocationSelector

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        marginTop:10,
        gap:20
    },
    text:{
        fontSize:16
    },
    image:{
        width:300,
        height:300
    }
   
})