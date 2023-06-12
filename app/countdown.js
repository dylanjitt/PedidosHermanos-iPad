import {StyleSheet, Text } from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

export default function CountDown(){

    const duration = 5;

    const children = ({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60
      
        return `${minutes}:${seconds}`
      }

    return(
        <CountdownCircleTimer
        isPlaying={true}
        duration={duration}
        size={500}
        children={children}
        colors="#fdaf01"
        strokeWidth={40}
        trailColor='#594b4b'
        
        >

            

            
            {({ remainingTime }) => (
        <Text style={styleClock.clockText}>
          {remainingTime}
        </Text>
      )}

        </CountdownCircleTimer>
    )
}

const styleClock = StyleSheet.create({
    clockText:{
        color:'#c1c1c1', 
        fontSize: 140,
        fontWeight:'bold' 

    }
})