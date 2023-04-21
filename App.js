import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';




export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  function handlePress() {
    setModalVisible(true);
  }

  function handleClose() {
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.boxWrapper}>
          <Text style={styles.box}>Wallet</Text>
        </View>
        <View style={styles.circleWrapper}>
          <TouchableOpacity style={styles.circle} onPress={handlePress}>
            <Text style={styles.circleText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
      </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPress={handleClose}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity style={styles.exitButton}
              onPress = {handleClose}>
                <Text style={styles.exitText}>
                  x
                </Text>

                
              </TouchableOpacity>
              <Text style={styles.modalText}>Would you like to add a new card?</Text>

              <TouchableOpacity style={styles.scanBox}>
                <Image

                  style={styles.image}
                  source={require('./assets/icons/camera.png')}
                />
                <Text style={styles.scanText}>Scan Card</Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 20, color: 'white', alignSelf: 'center', margin: 20 }}>or enter manually... </Text>
              <TouchableOpacity style={styles.manualButton}>
                <Image

                  style={styles.image}
                  source={require('./assets/icons/qr.png')}
                />
                <Text style={styles.scanText}>Enter Code</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginTop: 50,
  },
  boxWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  box: {
    color: 'white',
    fontFamily: 'System',
    fontSize: 40,
    fontWeight: 'bold'
  },
  circleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 35,
    height: 35,
    borderRadius: 120,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },  
  exitButton: {
    width: 35,
    height: 35,
    borderRadius: 120,
    backgroundColor: '#2c2c2c',
    justifyContent: 'center',
    alignSelf: 'flex-end'
  },
  exitText: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    
    lineHeight: 26,
    fontFamily: 'System',
  },
  circleText: {
    color: 'black',
    fontSize: 35,
    textAlign: 'center',
    lineHeight: 37,
    fontFamily: 'System',
  },
  content: {
    flex: 8,
    backgroundColor: '#353237',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#303030',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 0.85,
  },
  modalText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
  },

  scanBox: {
    height: 50,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 150,
  },
  scanText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  image: {
    width: 40,
    height: 40,
    right: 10,
    alignSelf: 'center',
  },
  manualButton: {
    height: 50,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
});