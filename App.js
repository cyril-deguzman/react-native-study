import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Pressable} from 'react-native';

export default function App() {
    // handle<functionName> : convention
    const handlePress = () => console.log("Text pressed");

    // use console.log for quick debugs
    console.log("start");

    /*
        - {{ width: 200, height: 300, uri: https://picsum.photos/200/300 }} third party assets
        + <Image style={styles.tinyLogo} source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/> third party assets
    */ 
    return (
        <SafeAreaView style={styles.container}>
            <Text>buset</Text>  

            {/*load local assets*/}
            <Image source={require('./assets/favicon.png')}/>

            {/**
             * onPress={()=> console.log("pressed")} longer version.
             * Pressable tag to handle touch based input 
             */}
            <Pressable onPress={handlePress}>
                <Image style={styles.tinyLogo} 
                    source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                />
            </Pressable>
            
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    tinyLogo: {
        width: 50,
        height: 50,
    },
});
