import { createSlice } from '@reduxjs/toolkit'
import allProducts from '../../Data/products.json'
import allCategories from '../../Data/categories.json'

const initialState = {
    value:{
        products:allProducts,
        categories:allCategories,
        productSelected:{},
        productsFilteredByCategory:[]
    }
  }

    export const shopSlice = createSlice({
        name:"Shop",
        initialState,
        reducers:{
            setProductsFilteredByCategory: (state, action)=>{
                state.value.productsFilteredByCategory = state.value.products.filter(products=>products.category==action.payload)
            },
            setProductSelected: (state,action)=>{
                state.value.productSelected = state.value.products.find(product =>product.id===action.payload)
            }
        }
    })
    export const {setProductsFilteredByCategory, setProductSelected} = shopSlice.actions

    export default shopSlice.reducer