import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native'
import CategoryItem from './CategoryItem'
import { colors } from '../Global/colors'
import { useGetCategoriesQuery } from '../app/services/shopServices'


const Categories = ({navigation, route}) => {
  const {data:categories, isLoading, isError} = useGetCategoriesQuery()
  if (isLoading) {
    return <ActivityIndicator size="large" color={colors.green} />;
  }

  if (isError) {
    return <Text style={styles.errorText}>Error al cargar las categorías</Text>;
  }
  return (
    
      <FlatList
      
        style={styles.container}
        data={categories}
        keyExtractor={item => item}
        renderItem={({ item }) => <CategoryItem category={item} navigation={navigation} route={route} />}
      />
    

  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor:"white",
    padding:20,
    alignContent:"center",
    paddingBottom:20
    },
    errorText: {
      color: colors.red, 
      fontSize: 16,
      textAlign: 'center',
    },
})