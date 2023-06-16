import { StyleSheet, Text } from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

export default function CountDown(props) {

    const duration = props.time;

    const mmss = time => {
        const minutes = Math.floor(time / 60)
        const seconds = time % 60

        
        return `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`
    }

    return (
        <CountdownCircleTimer
            isPlaying={true}
            duration={duration}
            size={500}
            onComplete={props.func}
            colors="#fdaf01"
            strokeWidth={40}
            trailColor='#594b4b'

        >  
            {({ remainingTime }) => (
                <Text style={styleClock.clockText}>
                    {mmss(remainingTime)}
                </Text>
            )}
          

        </CountdownCircleTimer>
    )
}

const styleClock = StyleSheet.create({
    clockText: {
        color: '#c1c1c1',
        fontSize: 140,
        fontWeight: 'bold'

    }
})