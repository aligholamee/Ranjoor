import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = (<Icon name="rocket" size={30} color="#900" />)

class RanjoorPoets extends React.Component {
    static navigationOptions = {
        title: 'Poets',
        tabBarIcon: myIcon
    };
    render() {
        return(
            <View>
                <Text>This is the Ranjoor's poets page</Text>
            </View>
        );
    }
}
export default RanjoorPoets