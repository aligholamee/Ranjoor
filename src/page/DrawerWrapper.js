import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { TabNavigator, DrawerNavigator } from 'react-navigation';
import TabWrapper from './RanjoorPagesWrapper';
import RanjoorSearch from './RanjoorSearch';


const DrawerWrapper = new DrawerNavigator({
    /* Here is our tab navigator inside the drawer navigator */
    Home: {
        screen: TabWrapper,
    },
}, {
        contentOptions: {
        }
    });

/* Navigation Options are implemented here */
DrawerWrapper.navigationOptions = {
    header: null,
}
export default DrawerWrapper