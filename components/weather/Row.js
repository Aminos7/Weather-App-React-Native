import React from 'react'
import {View, Text} from 'react-native'
import PropTypes from 'prop-types'
import moment from 'moment'
import 'moment/locale/fr'

moment.locale('fr')

export default class Row extends React.Component{

      static propTypes = {
        day : PropTypes.object.isRequired,
        index : PropTypes.number,
        data_complete : PropTypes.array.isRequired,
    }
    

  day() {
    let day = moment(this.props.day.dt*1000).format('ddd')
    return(
      <Text>{ day.toUpperCase() }</Text>
    )
  }
  date() {
    let day = moment(this.props.day.dt*1000).format('DD/NN')
    return(
      <Text>{ day }</Text>
    )
  }

  render() {
    return (
      <View>
        <Text>{this.props.day.temp.day}°C</Text>
      </View>
    )
  }
}