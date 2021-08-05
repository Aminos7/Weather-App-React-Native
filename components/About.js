import React from 'react'
import globalstyle from '../Style'
import {View, Text ,Image, ImageBackground} from 'react-native'
import GetCurrentDate from './GetCurrentDate'


export default class About extends React.Component {
  
    
    static navigationOptions = {
        tabBarIcon : () => {
            return <Image source={require('./png/Home.png')} style={{width : 20, height: 20}}/>
        }
    }
  
    render () {
        return (
            <View>
                <ImageBackground source={require('./background/Blood.jpg')} style={{width: '100%',height:'100%'}}>
                    <View style={globalstyle.container}>
                        <Text style={globalstyle.title}>
                            WeatherPro
                        </Text>
                        <Text style={{margin : 25, fontSize: 16, color: '#FFF', fontWeight : 'bold'}}>
                        Bienvenue sur WeatherPro 
                        </Text>
                        <Text style={{margin:20, fontWeight : 'bold', fontSize : 16, color : '#FFF' }}>
                        là où la météo est dispo à toute instant
                        </Text>
                        
                    </View>
                </ImageBackground>
                <GetCurrentDate />
            </View>
        )
    }
}

