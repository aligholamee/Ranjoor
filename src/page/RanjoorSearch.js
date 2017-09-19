import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBar } from 'react-native-elements';
import ExploreHeader from '../elements/headers/ExploreHeader'


/* 
* This will be used to find out if the
* text on the searchbar is being changed
* and display an indicator on the right
* side of the search bar
*/
var textChanged = false;

class RanjoorSearch extends React.Component {
    static navigationOptions = {
        header: null,
        tabBarIcon: ({ tintColor, focused }) => (
            <Icon
                name="search"
                size={24}
                color={focused ? 'black' : '#333238'}
            />
        ),
        headerStyle: { backgroundColor: '#202026' },
        headerTitleStyle: {
            fontFamily: 'IRANSans_UltraLight',
            color: 'white',
            alignSelf: 'flex-end'
        },
    };
    render() {
        const { dispatch } = this.props.navigation;
        return (
            <View style={styles.SearchContainer}>
                <ExploreHeader />
                <SearchBar
                    inputStyle={{ fontFamily: 'IRANSans', fontSize: 11, backgroundColor: 'black' }}
                    containerStyle={{
                        backgroundColor: '#fafafa', borderRadius: 25, width: '90%',
                        marginTop: 10, alignSelf: 'center'
                    }}
                    lightTheme
                    round
                    placeholder='جستجو در گنجینه...' />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    SearchContainer: {
        backgroundColor: '#8e8d93',
        height: '100%',
        width: '100%',
    },
    logoContainer: {
        alignContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 250,
        height: 250,
        opacity: 0.2
    },
})

export default RanjoorSearch