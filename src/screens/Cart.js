import { StyleSheet, Text, View, FlatList, Pressable, Modal } from 'react-native';
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';
import { usePostOrdersMutation } from '../app/services/shopServices';
import { colors } from '../Global/colors';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { clearCart } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'

const Cart = () => {
  const localId = useSelector(state => state.auth.value.localId);
  const cart = useSelector(state => state.cart);
  const [triggerPostOrder] = usePostOrdersMutation();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [isConfirmationModalVisible, setConfirmationModalVisible] = useState(false);

  const handleConfirmOrder = async () => {
    try {
      await triggerPostOrder({ order: cart, localId });
      // La mutación ha tenido éxito, ahora puedes mostrar el modal
      setConfirmationModalVisible(true);
    } catch (error) {
      // Manejar errores de la mutación si es necesario
      console.error('Error al confirmar el pedido:', error);
    }
  };

  const closeModal = () => {
    setConfirmationModalVisible(false);
    navigation.navigate('Home');
    dispatch(clearCart());
  };

  if (!cart || !cart.value || !cart.value.items || cart.value.total === null) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>El carrito está vacío</Text>
      </View>
    );
  }

  const { value: { items, total } } = cart;

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <View style={styles.confirmContainer}>
        <Pressable style={styles.btn} onPress={handleConfirmOrder}>
          <Text style={styles.text}>Confirm</Text>
        </Pressable>
        <Text style={styles.text}>Total: $ {total} </Text>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isConfirmationModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>¡Order successfully confirmed!</Text>
            <Pressable style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.modalButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 130,
    padding: 20,
    backgroundColor:colors.steelBlue
  },
  confirmContainer: {
    padding: 15,
    margin: 10,
    alignContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontFamily: 'Raleway-Black',
    fontSize: 28,
    alignSelf:"center",
    paddingTop:10,
    
  },
  btn: {
    backgroundColor: colors.blue,
    padding: 10,
    borderRadius: 20,
    margin: 20,
    alignSelf:"center",
    
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});
