import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../Global/colors';
import { useDispatch } from 'react-redux';
import { removeItem } from '../features/cart/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem({ id: item.id }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>{item.title} </Text>
        <Text style={styles.text2}>{item.brand} </Text>
        <Text style={styles.text1}>$ {item.price} Quantity: {item.quantity} </Text>
      </View>
      <TouchableOpacity onPress={handleRemoveItem}>
        <AntDesign name='delete' size={25} color={colors.black} />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    margin: 10,
    padding: 10,
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
  },
  textContainer: {
    width: '90%',
    gap: 2,
  },
  text1: {
    fontSize: 17,
    fontFamily: 'Raleway-Black',
    width:"90%"
  },
  text2: {
    fontSize: 14,
    fontFamily: 'Raleway-Medium',
  },
});
