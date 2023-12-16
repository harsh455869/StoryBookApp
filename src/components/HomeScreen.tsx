import {
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  ScrollView,

} from 'react-native';
import React, {useRef,useState,useEffect} from 'react';
import {colors, fonts} from './BaseUrls';
import {Appbar} from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
type Props = {};
import data from '../../data.json';
// import category from '../../category.json';
const category=[{
  "name":"Learning",
  "imageUrl":require("../assets/Learning1.png"),
  "id":"0",
  "screenName":"LearnScreen",
  "url":""
},
{
  "name":"Reading",
  "imageUrl":require("../assets/Reading.png"),
  "id":"1",
  "screenName":"LearnScreen",
  "url":""
},
{
  "name":"Painting",
  "imageUrl":require("../assets/Painting.png"),
  "id":"5",
  "screenName":"LearnScreen",
  "url":""
},
{
  "name":"Writing",
  "imageUrl":require("../assets/Writing.png"),
  "id":"3",
  "screenName":"LearnScreen",
  "url":""
}
]
const HomeScreen = ({onActive}: Props) => {
  const ref = useRef();
  let imgarry=[];
 
  const RenderAllActivities=(item,image)=>{
   
   
    
    return(<TouchableOpacity onPress={()=>{onActive(item.id)}} style={{marginRight:20,alignItems:'center'}}>
      <Image style={{borderRadius:25,height:50,width:50}} source={image}/>
       <Text style={{color: 'black',fontSize:14,fontFamily:fonts.BlackFont}}>{item.name}</Text>
    </TouchableOpacity>)
  }
  const renderRecentActivities = ({item}) => {
    return (
      <TouchableOpacity
      onPress={()=>{console.log(item.id)}}
        style={{
         
          height: 130,
          width: 200,
          marginHorizontal: 5,
        }}>
        <Image
          style={{width: '100%', height: '100%',backgroundColor:'rgba(0,0,0,0.5)', borderRadius: 10,justifyContent:'flex-end'}}
          source={{uri: data.imageUrl}}
          resizeMode="contain"/>
          <Text style={{color: 'black',fontSize:14,fontWeight:'700'}}>{data.title}</Text>
       
      </TouchableOpacity>
    );
  };
  const renderStories=({item,index})=>{
    return(
     <Image
          style={{width:width-30,height:200,backgroundColor:'rgba(0,0,0,0.5)', borderRadius: 10,justifyContent:'flex-end',resizeMode:'contain',marginRight:20}}
          source={{uri: data.imageUrl}}
          resizeMode="contain"/>
    )
  }
  const renderCards = () => {
    return (
      <Image
        source={{uri: data.imageUrl}}
        resizeMode="contain"
        style={{height: 80, borderRadius: 10}}
      />
    );
  };
  const width = Dimensions.get('screen').width;
  return (
    <View style={{backgroundColor: 'purple',flex:1}}>
      <Appbar.Header mode='center-aligned' style={{backgroundColor:'rgba(0,0,0,0)',height:50,justifyContent:'center'}}>
        <View style={{flexDirection:'row',alignSelf:'center',alignItems:'center'}}>
        <Image style={{height:50,width:50,marginRight:5}} source={require('../assets/property.png')}/>
        {/* <Text style={{color:'white',fontSize:14,fontWeight:'600'}}>Home</Text> */}
        </View>
      </Appbar.Header>
      <Image style={{height:'70%',position:'absolute',top:-50,zIndex:-1000,width:'90%',alignSelf:'center'}}  resizeMode='contain' source={require('../assets/learning.png')}/>

  
      <StatusBar backgroundColor={'purple'} networkActivityIndicatorVisible={false} barStyle={'light-content'} />
      <View style={{flex:1,justifyContent:'space-between',height:'100%'}}>
      
      <View style={{marginHorizontal:15,marginVertical:30}}>
      <Text style={{color:'white',fontSize:20,fontWeight:'700',fontFamily:fonts.BlackFont}}>Good Morning,</Text>
      <Text style={{color:'white',fontSize:20,fontWeight:'600',fontFamily:fonts.BlackFont}}>Harsh Patel</Text>
      </View>
      

      <ScrollView

        style={{
          backgroundColor: colors.WhiteLogin,
       
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          elevation: 10,
          paddingVertical: 5,
        height:'100%'
          
        }}>
        <View>
          <Text
            style={{
              fontSize: 19,
              color: 'black',
              marginVertical: 10,
              fontWeight: '600',
              paddingHorizontal:15
            }}>
            Recent Activities
          </Text>
          <FlatList
            data={[0, 2, 3, 4]}
            showsHorizontalScrollIndicator={false}
            style={{paddingLeft:15}}
            horizontal={true}
            renderItem={renderRecentActivities}
          />
        </View>
        
        <View style={{marginTop:10}}>
        <Text
            style={{
              fontSize: 19,
              color: 'black',
              marginVertical: 10,
              fontWeight: '600',
              paddingHorizontal:15
            }}>
            All Activities
          </Text>
        </View>
        <FlatList
        style={{paddingLeft:15}}
            data={category}
            horizontal={true}
            renderItem={({item,index})=>RenderAllActivities(item,item.imageUrl)}

          />

<FlatList
        style={{paddingLeft:15,marginTop:20}}
            data={[0,3,4]}
            horizontal={true}
            renderItem={renderStories}
          />
      </ScrollView>
     
    
      </View>
    
    </View>
  );
};

export default HomeScreen;
