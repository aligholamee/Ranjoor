import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header, Divider, Button } from 'react-native-elements';

const searchButton = (<Button
  small
  icon={{name: 'search', type: 'font-awesome', color:'#909096'}}
  borderRadius={5}
  backgroundColor='transparent'
   />)

const channelButton = (<Button
  small
  icon={{name: 'telegram', type: 'font-awesome', color:'#909096'}}
  backgroundColor='transparent' 
  borderRadius={5}
  iconRight={true}
/>)

export default class PoetHeader extends Component {
    render(){
        return(
            <View>
                <StatusBar
                    backgroundColor="#f0f0f0"
                    barStyle="dark-content"
                />
                <View style={{backgroundColor:'#fafafa', height:60,}}>
                    <Header
                    centerComponent={<Image style={styles.logo}
                                            source={require('../../img/logo/Ranjoor_white_wide.png')}
                                   />} 
                    />
                </View>
                <View>
                    <Divider style={{ backgroundColor: 'white' }} />
                </View>
            </View>


        )
    }
}

var styles = StyleSheet.create({
    logo: {
        width: 85,
        height: 40,
        marginBottom:6
    }
})