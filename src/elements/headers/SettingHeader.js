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
    icon={{ name: 'search', type: 'font-awesome', color: '#909096' }}
    borderRadius={5}
    backgroundColor='transparent'
/>)

const channelButton = (<Button
    small
    icon={{ name: 'telegram', type: 'font-awesome', color: '#909096' }}
    backgroundColor='transparent'
    borderRadius={5}
    iconRight={true}
/>)

export default class SettingHeader extends Component {
    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor="#f0f0f0"
                    barStyle="dark-content"
                />
                <View style={{ backgroundColor: '#fafafa', height: 50, }}>
                    <Header
                        centerComponent={
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 10, alignSelf: 'flex-end', fontFamily: 'Mj_Moshfegh', color: 'black', marginBottom: 20 }}>تنظیمات</Text>
                                <Text style={{ fontSize: 35, alignSelf: 'flex-start', fontFamily: 'Mj_Moshfegh', color: 'black', marginBottom: 6 }}>گنجور</Text>
                            </View>

                        }
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
        marginBottom: 6
    }
})