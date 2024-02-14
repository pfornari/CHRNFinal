import { FlatList, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'
import Search from '../components/Search'
import ProductItem from '../components/ProductItem'
import { useGetProductsQuery } from '../app/services/shopServices'

const ItemListCategories = ({ navigation, route }) => {
  const {category} = route.params
  const {data,isLoading} = useGetProductsQuery(category)
  const [keyWord, setKeyWord] = useState("")
  const [products, setProducts] = useState()

  

  useEffect(() => {
    if (!isLoading) {
      const dataArray = Object.values(data)
      const productsFiltered = dataArray.filter(product => product.title.includes(keyWord))
      setProducts(productsFiltered)
      
      }
    
    
  }, [keyWord, data])
 

  return (
    <>
      
      <Search setKeyWord={setKeyWord} navigation={navigation} route={route} />
      
      <FlatList
        style={styles.container}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProductItem item={item} navigation={navigation} route={route} />}
      />

    </>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex:1,
    paddingTop:10,
    marginBottom:120
    
  }
})