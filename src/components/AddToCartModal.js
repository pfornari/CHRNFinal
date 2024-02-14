import React, { useState } from 'react';
import { Modal, Text, View, Pressable } from 'react-native';

const AddToCartModal = ({ isVisible, closeModal }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={closeModal}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
            Producto agregado al carrito
          </Text>
          <Text style={{ marginBottom: 20 }}>¡Tu producto se ha agregado correctamente al carrito!</Text>
          <Pressable
            style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
            onPress={closeModal}
          >
            <Text style={{ color: 'white' }}>Cerrar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default AddToCartModal;
