import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SettingHeader from '../../elements/headers/SettingHeader';

class RanjoorSettings extends React.Component {
    static navigationOptions = {
        header: null,
        title: 'Settings',
        tabBarIcon: ({ tintColor, focused }) => (
            <Icon
                name="sliders"
                size={24}
                color={focused ? 'black' : '#333238'}
            />
        ),
        headerStyle: { backgroundColor: '#202026' },
        headerTitleStyle: {
            color: 'white'
        }
    };
    render() {
        return (
            <View style={styles.SettingsContainer}>
                <SettingHeader />
                <Text>This is the Ranjoor's settings page</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    SettingsContainer: {
        backgroundColor: '#8e8d93',
        height: '100%',
        width: '100%'
    }
})
export default RanjoorSettings