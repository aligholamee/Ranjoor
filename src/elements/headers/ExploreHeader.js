import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header } from 'react-native-elements';

export default class ExploreHeader extends Component {
    render(){
        return(
            <View style={{backgroundColor:'#202026', height:71,}}>
                <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={<Image style={styles.logo}
                                        source={require('../../img/logo/Ranjoor_white_wide.png')}
                                 />} 
                rightComponent={{ icon: 'home', color: '#fff' }}
                />
            </View>

        )
    }
}

var styles = StyleSheet.create({
    logo: {
        width: 82,
        height: 40,
        marginTop:22
    }
})