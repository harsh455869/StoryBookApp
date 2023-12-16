import { View, Text,Image ,StatusBar,ScrollView} from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper'
import { colors } from './BaseUrls'

type Props = {}

const LearnScreen = (props: Props) => {
  return (
    <View style={{ flex:1,backgroundColor:'green'}}>
     <Appbar.Header mode='center-aligned' style={{backgroundColor:'rgba(0,0,0,0)',height:50,justifyContent:'center'}}>
        <View style={{flexDirection:'row',alignSelf:'center',alignItems:'center'}}>
        {/* <Image style={{height:50,width:50,marginRight:5}} source={require('../assets/studying.png')}/> */}
        {/* <Text style={{color:'white',fontSize:14,fontWeight:'600'}}>Home</Text> */}
        </View>
      </Appbar.Header>
      <Image style={{height:'60%',top:-120,zIndex:-1000,width:'80%',alignSelf:'center',marginBottom:-280}}  resizeMode='contain' source={require('../assets/Reading.png')}/>
      <StatusBar backgroundColor={'green'} networkActivityIndicatorVisible={false} barStyle={'dark-content'} />
      <View style={{flex:1,justifyContent:'space-between',height:'100%'}}>
      <ScrollView

style={{
  backgroundColor: colors.WhiteLogin,

  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  elevation: 10,
  paddingVertical: 5,
height:'100%'
  
}}></ScrollView>
      </View>
    </View>
  )
}

export default LearnScreen