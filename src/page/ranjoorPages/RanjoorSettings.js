import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = (<Icon name="sliders" size={24} color="#ffffff" />)

class RanjoorSettings extends React.Component {
    static navigationOptions = {
        title: 'Settings',
        tabBarIcon: myIcon,
    };
    render() {
        return(
            <View style={styles.SettingsContainer}>
                <Text>This is the Ranjoor's settings page</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    SettingsContainer: {
        backgroundColor: '#303036',
        height: '100%',
        width: '100%'
    }
})
export default RanjoorSettings