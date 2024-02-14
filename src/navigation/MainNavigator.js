import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './TabNavigator'
import AuthStack from './AuthStack'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSession } from '../database'
import { useEffect } from 'react'

const MainNavigator = () => {
    const dispatch = useDispatch()
    const idToken = useSelector(state => state.auth.value.idToken)

    useEffect(() => {
      (async()=>{
        try {
          const session = await fetchSession()
          if(session.rows.lenght){
            const user = session.rows._array[0]
            dispatch(setUser(user))
          }
        } catch (error) {
          console.log(error.message)
        }
      })()
    }, [])
    
    
  return (
    <NavigationContainer>
       {idToken ? <TabNavigator/> : <AuthStack/>} 
    </NavigationContainer>
  )
}

export default MainNavigator