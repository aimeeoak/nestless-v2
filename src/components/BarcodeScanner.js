import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';
import Camera from 'react-native-camera';


export default class BarcodeScan extends Component {
    constructor(props) {
        super(props);
        this.handleTourch = this.handleTourch.bind(this);
        this.state = {
        torchOn: false
        }
    }
    onBarCodeRead = (e) => {
        Alert.alert("Barcode value is" + e.data, "Barcode type is" + e.type);
    }
    render() {
        return (
            <View className="barcode-scanner">
            <Camera
            style={styles.preview}
            torchMode={this.state.torchOn ? Camera.constants.TorchMode.on : Camera.constants.TorchMode.off}
            onBarCodeRead={this.onBarCodeRead}
            ref={cam => this.camera = cam}
            aspect={Camera.constants.Aspect.fill}
            >
            </Camera>
            <View style={styles.bottomOverlay}>
            <TouchableOpacity onPress={() => this.handleTourch(this.state.torchOn)}>
            <Image style={styles.cameraIcon}
            source={this.state.torchOn === true ? require('../../images/flasher_on.png') : require('../../images/flasher_off.png')} />
            </TouchableOpacity>
            </View>
            </View>
        )
    }

    handleTourch(value) {
        if (value === true) {
        this.setState({ torchOn: false });
        } else {
        this.setState({ torchOn: true });
        }
    }
}

//https://medium.com/@dinukadilshanfernando/implementing-a-barcode-scanner-by-using-react-native-camera-b170de4b7f51