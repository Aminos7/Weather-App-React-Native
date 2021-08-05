import React  from 'react'
import {ListView, Button, Text, Image} from 'react-native'
import globalstyle from '../Style'
import WeatherRow from './weather/Row'
import {ActivityIndicator , Colors} from 'react-native-paper'
import axios from 'axios'
import moment from 'moment';
import { View } from 'native-base';

moment.locale('us')
export default class List extends React.Component{
    
    
    static navigationOptions = ({navigation}) => {
        
        return{
            title : `${navigation.state.params.city}`,
            
        }
    }
    constructor(props){
        super(props)
        this.state = {
            city: this.props.navigation.state.params.city,
            report : null,
            error : false
        }
        this.fetchWeather()
    }
    fetchWeather (){
        axios.get(`api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=047bfe4732d7a2833c44afd7e7d945a8`) 
        .then((response) => {
                this.setState({report: response.data})
            })
        .catch(() => {
            this.setState({error : true})
        })
    }
errorIcon(size = 50){
    let image = require('./png/cancel.png')
    return <Image source={image} style={{width: size ,height: size}}/>
}
    filterData = (data) => data.slice(0,1).concat(data.filter((item) => moment(item.dt * 1000).format('LT') == '13:00'));
        
    render(){
        if(this.state.report === null)
        {
            if(this.state.error === true){
                return (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                         {this.errorIcon(150)}
                        <View>
                            <Text style={{fontSize: 20, margin : 20}}>Veuillez inserer une Ville valide</Text>
                        </View>
                       
                        <View>
                            <Button
                            onPress={() => this.props.navigation.goBack(null)}
                            title="Retour"
                            color={globalstyle.color}
                            style={{ marginTop: 50}}
                            />
                        </View>
                    </View>
                  );
            }
            else{
                return(
                    <ActivityIndicator style={globalstyle.Indicator} animating={true} color={Colors.white800} size="large"/>
                )
            }
        }
       
        else {
            
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            return(
                <View style={{backgroundColor: '#263238'}}>
                    <ListView
                    dataSource={ds.cloneWithRows(this.filterData(this.state.report.list))}
                    renderRow={(row ,a, b) => <WeatherRow data_complete={this.state.report.list} day={row} index={parseInt(b, 10)}/>}
                    />
                </View>
            )
        }
    }
}