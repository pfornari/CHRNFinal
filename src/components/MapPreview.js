import { Image, StyleSheet } from 'react-native'
import { googleApi } from '../firebase/googleApi'


const MapPreview = ({latitude, longitude}) => {
    const mapPreviewURL = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C${latitude},${longitude}&key=${googleApi.mapStatic}`
  return (
    <Image style={styles.image} source={latitude? {uri:mapPreviewURL} : require("../../assets/map.jpg")}/>
  )
}

export default MapPreview

const styles = StyleSheet.create({
    image:{
        width:300,
        height:300
    }
})