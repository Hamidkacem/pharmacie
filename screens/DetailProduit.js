import React, { useState, useEffect } from 'react';
import {
  ImageBackground,
    StyleSheet,
    View,
    Text, 
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio} from 'native-base';
import { useNavigation } from '@react-navigation/native';

import Searchbar from '../Shared/SearchBar'



 function DetailProduit (props) {
  
   
    return (

        <View style={styles.container}>
           
            <View style={styles.ImageX}>
            <Image source={require('../assets/img/inot1.png') } alt=" ImageProduit"/>
            </View>
            <View style={styles.Middle}>
                <Text style={styles.BiText}>Nom du produit:  </Text>
            </View>
            <View style={styles.Middle}>
                <Text style={styles.Bi1Text}>Etat de la disponibilité: </Text>
            </View>
            
           </View>



    )
  }
    export default ()=>{
      return (
          <NativeBaseProvider>
              <DetailProduit/>
          </NativeBaseProvider>
      )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
         backgroundColor: 'white', height: '100%', width: '100%' 
    },
    
    ImageX:{
        
        //height:'10%',
        alignItems:'center',
        padding:20,
        //height:'20%'
        paddingBottom:20,
       
    },
    BiText:{

        fontFamily:'monospace',
        color:'#344372',
        paddingBottom:20,
        fontSize:14,
       
       
    },
    Bi1Text:{
        fontFamily:'monospace',
        color:'#344372',
        fontSize:14,
      
    },

  
  
});