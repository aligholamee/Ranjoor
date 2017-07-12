import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = (<Icon name="star" size={24} color="#ffffff" />)

class RanjoorFavorites extends React.Component {
    static navigationOptions = {
        title: 'Favorites',
        tabBarIcon: myIcon,
        headerStyle: { backgroundColor: '#202026',
                     shadowOpacity: 0,
                     shadowOffset: { height: 0, width:0 },
                     elevation: 0,
         },
        headerTitleStyle: {
            color: 'white'
        },
        headerRight: true
    };
    render() {
        return(
            <View style={styles.FavoritesContainer}>
                <Text>This is the Ranjoor's Favorites page</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    FavoritesContainer: {
        backgroundColor: '#303036',
        height: '100%',
        width: '100%'
    }
})

export default RanjoorFavorites