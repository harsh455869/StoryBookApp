import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {useCallback, useState} from 'react';
import ListStory from '../components/ListStory';
import SearchStory from '../components/SearchStory';
import WriteStory from '../components/WriteStory';
import DrawingScreen from '../components/DrawingScreen';
import {IconButton, Appbar} from 'react-native-paper';
import HomeScreen from '../components/HomeScreen';
import StoryPreview from '../components/StoryPreview';
import LearnScreen from '../components/LearnScreen';

type Props = {};

const Home = ({navigation}: Props) => {
  const [activeComponent, setactiveComponent] = useState<number>(2);

  const RenderMain =() => {
    if(activeComponent==5){
      
      navigation.navigate('draw')
      setactiveComponent(2)
    }
    switch (activeComponent) {
      case 0:
        return <LearnScreen />;
      case 1:
        return <ListStory />;

      case 2:
        return <HomeScreen onActive={(e)=>{setactiveComponent(parseInt(e))}}/>;

      case 3:
        return <WriteStory />;

      default:
        return <View></View>;
    }
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'lightgrey',
      }}>
      <RenderMain />
      <View
        style={{
          justifyContent: 'space-between',
          borderRadius: 5,
          elevation: 8,
          flexDirection: 'row',
          alignItems: 'center',
          shadowColor: 'black',
          paddingHorizontal: 20,
          backgroundColor: 'white',
        }}>
        <TouchableOpacity
          style={[
            activeComponent == 0 && styles.activeStyle,
            styles.bottomstyle,
          ]}
          onPress={() => setactiveComponent(0)}>
          <Image
            style={styles.imagestyle}
            source={require('../assets/studying.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            activeComponent == 1 && styles.activeStyle,
            styles.bottomstyle,
          ]}
          onPress={() => setactiveComponent(1)}>
          <Image
            style={styles.imagestyle}
            source={require('../assets/book.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            activeComponent == 2 && styles.activeStyle,
            styles.bottomstyle,
          ]}
          onPress={() => setactiveComponent(2)}>
          <Image
            style={styles.imagestyle}
            source={require('../assets/property.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.bottomstyle]}
          onPress={() => navigation.navigate('draw')}>
          <Image
            style={styles.imagestyle}
            source={require('../assets/color-palette.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            activeComponent == 3 && styles.activeStyle,
            styles.bottomstyle,
          ]}
          onPress={() => setactiveComponent(3)}>
         <Image style={styles.imagestyle} source={require('../assets/story-board.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  activeStyle: {
    
    backgroundColor:'blue',
  borderRadius:20,
 
 
 
  },
  bottomstyle: {
     marginVertical:8,
    paddingHorizontal:10,
    alignItems:'center',
    justifyContent:'center'
  },
  imagestyle: {
    width: 38,
    height: 38,
    resizeMode:'contain'
  },
});
export default Home;
