import { View, Text,Image,ScrollView,FlatList, Dimensions } from 'react-native'
import React,{useState,useEffect, useRef} from 'react'
import data from '../../data.json'
import Carousel from 'react-native-snap-carousel'
type Props = {}

const StoryPreview = (props: Props) => {
    const [sotry, setsotry] = useState<Array<string>>([]);
const [first, setfirst] = useState<string>('');
const ref=useRef()
const colors=['#40B8D0','#B09090','#F8C0D0','lightgrey']
  const splitData=()=>{
  let array=[];
    let length=Math.ceil(data.story.length/500);
    for (let index = 0; index < length-1; index++) {
     array.push(data.story.slice(index*500,(index+1)*500))
    }
    array.push(data.story.slice((length-1)*500))
 
    setsotry(array.slice(0))
    
    
  }
 useEffect(() => {
  splitData()
 }, []);
 const renderItemp=({item,index})=>{
  return(<View style={{marginVertical:10,padding:17,borderRadius:10,backgroundColor:colors[index],elevation:5,shadowColor:'black',height:'90%'}}>
  
  <Image resizeMode='contain' style={{width:'100%',height:200,borderRadius:10}} source={{uri:data.imageUrl}} />
  <Text style={{marginTop:10,fontWeight:'700',fontSize:20,color:'black',fontFamily:'sans-serif'}}>{data.title}</Text>
  <Text style={{fontWeight:'600',marginBottom:50,fontSize:17,marginTop:10,color:'black',fontFamily:'serif'}}>{item}</Text>
 <Text style={{textAlign:'center',fontWeight:'600',}}>Page:{index+1}</Text>
  </View>

  )
 }
 const width=Dimensions.get('screen').width
  return (
    <View style={{backgroundColor:'lightblue',flex:1,justifyContent:'center',alignItems:'center'}} >
    {/* <View style={{marginVertical:10,padding:17,borderRadius:10,backgroundColor:'lightblue',elevation:5,shadowColor:'black',marginHorizontal:10}}>
    
    <Text style={{marginTop:10,fontWeight:'700',fontSize:20,color:'black',fontFamily:'sans-serif'}}>{data.title}</Text>
    
    <Text style={{fontWeight:'600',marginBottom:50,fontSize:17,marginTop:10,color:'black',fontFamily:'serif'}}>{first}</Text>
    </View> */}
   <Carousel
   layout={'tinder'}
   ref={ref}
   data={sotry}
   renderItem={renderItemp}
   sliderWidth={width}
   itemWidth={width-30}
   />
  
  </View>
  )
}

export default StoryPreview