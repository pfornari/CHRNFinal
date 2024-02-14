import { StyleSheet, View } from 'react-native'
import Categories from '../components/Categories'
import { colors } from '../Global/colors'


const Home = ({navigation, route}) => {
    return (
        <View style={styles.container} >
            <Categories navigation={navigation} route={route} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        paddingBottom:110,
        backgroundColor:colors.silver
    }
})