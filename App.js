import { StyleSheet } from 'react-native'
import { useFonts } from "expo-font"
import { StatusBar } from 'expo-status-bar'
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import MainNavigator from './src/navigation/MainNavigator'
import { init } from './src/database'

init()
  .then(()=>console.log("db init"))
  .catch(err=>console.log(err))

const App = () => {


  const [fontLoaded] = useFonts({
    'Raleway-Black': require('./assets/Fonts/Raleway-Black.ttf'),
    'Raleway-ExtraBold': require('./assets/Fonts/Raleway-ExtraBold.ttf'),
    'Raleway-Bold': require('./assets/Fonts/Raleway-Bold.ttf'),
    'Raleway-SemiBold': require('./assets/Fonts/Raleway-SemiBold.ttf'),
    'Raleway-Medium': require('./assets/Fonts/Raleway-Medium.ttf'),
    'Raleway-Regular': require('./assets/Fonts/Raleway-Regular.ttf'),
    'Raleway-Light': require('./assets/Fonts/Raleway-Light.ttf'),
    'Raleway-ExtraLight': require('./assets/Fonts/Raleway-ExtraLight.ttf'),
    'Raleway-Thin': require('./assets/Fonts/Raleway-Thin.ttf')
  })

  if (!fontLoaded) return null

  return (
    <>
      <StatusBar style="auto" backgroundColor="blue"
      />
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'start',
  },
})
