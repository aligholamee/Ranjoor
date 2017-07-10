
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class SplashScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;

        return (
        <View style={styles.container}>
            <View style={{flex:1}}></View>
                <Animatable.View 
                    animation="slideInDown"
                    style={{width: 230, height: 230, backgroundColor: 'transparent'}}
                    onAnimationEnd = {(endState) => {
                     if(endState.finished) {
                        navigate('Main')
                     } else {
                        console.log('not yet!')
                     }
                    }}
                >
                    <Image style={styles.introLogo}
                        source={require('../img/logo/Ranjoor.png')}
                    />
                </Animatable.View>
            <View style={{flex:1}}></View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3863cc',
},
welcome: {
    fontSize: 45,
    textAlign: 'center',
    margin: 10,
},
instructions: {
    textAlign: 'center',
    color: '#242329',
    marginBottom: 5,
},
introLogo: {
    width: 230,
    height: 230
}
});
