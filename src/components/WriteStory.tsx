import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Appbar, IconButton } from 'react-native-paper'
import { colors } from './BaseUrls'

const WriteStory = () => {
  return (
    <View style={{flex:1,backgroundColor:colors.WhiteLogin}}>
     <Appbar.Header mode='center-aligned' style={{backgroundColor:colors.WhiteLogin}}>
      <Appbar.Content title='Stories'/>
     </Appbar.Header>
     <View style={{}}>

     </View>
     <TouchableOpacity style={{backgroundColor:'purple',height:50,width:50,position:'absolute',borderRadius:25,alignItems:'center',justifyContent:'center',bottom:20,right:20,elevation:3}}>
     <IconButton  icon={'plus'} size={35}  iconColor='white'/>

     </TouchableOpacity>
    </View>
  )
}

export default WriteStory