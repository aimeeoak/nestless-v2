import React, { useState } from "react";
import { Modal, Text, Pressable, View } from "react-native";

export default function SearchPopup() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View className="enteredView">
          <View className="modalView">
            <Text className="modalText">Hello World!</Text>
            <Pressable
              className="button"
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text className="textStyle">Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        className="button"
        onPress={() => setModalVisible(true)}
      >
        <Text className="textStyle">Show Modal</Text>
      </Pressable>
    </View>
  );
}; 
