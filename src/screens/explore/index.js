import React, { useEffect, Component, memo } from 'react';
import { SafeAreaView, Animated, ScrollView, Dimensions } from 'react-native';
import { View, Button, Text } from 'react-native-ui-lib';

const { height, width } = Dimensions.get('window')


const App = () => {

    const [state1, setState1] = React.useState({
        a: 1
    })
    const [state2, setState2] = React.useState(1)
    const scrollRef = React.useRef(new Animated.Value(0));

    const value = React.useMemo(() => {
        return state1;

    }, [state2]);

    const cb = React.useCallback(() => {
        return state1;
    }, [state2]);


    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <Button label='Update App2' onPress={() => {
                setState2(state2 + 1)
                scrollRef.current.scrollTo({ y: height, animated: true })
            }} /> */}
            <ScrollView ref={scrollRef} style={{ flex: 1 }}>
                <App1 state={state1.a} />
                <Button label='Update App1' onPress={() => {
                    console.log('here', )
                    state1.a = state1.a+2;
                    // scrollRef.current.scrollTo({ y: 0, animated: true })
                }} />

            </ScrollView>
        </SafeAreaView>

    )
}

const App1 = ({ state }) => {
    return (
        <View style={{ backgroundColor: '#ddd' }}>
            <Text>{'App1:' + state}</Text>
        </View>
    )
}
const App2 = memo(
    ({ state }) => {
        return (
            <View style={{ backgroundColor: 'blue' }}>
                <Text>{'App1:' + state}</Text>
            </View>
        )
    }
)






const App_ = () => {
    const position = React.useRef(new Animated.ValueXY({ x: 10, y: 0 })).current;
    const opacity = React.useRef(new Animated.Value(1)).current;


    const _goDown = () => {
        // Animated.spring(position, {
        //     toValue: { x: 100, y: 400 },
        // }).start()
        Animated.decay(position, {
            velocity: { x: 1, y: 1 }, // velocity from gesture release
            deceleration: 0.997,

            toValue: { x: 100, y: 400 },
        }).start()
    }
    const _goUp = () => {
        Animated.timing(position, {
            toValue: { x: 10, y: 0 },
        }).start()
    }
    const _goFate = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 1000,
            }
        ).start();
    }
    const _goFateIN = () => {
        Animated.timing(
            opacity,
            {
                toValue: 10,
                duration: 1000,
            }
        ).start();
    }
    const _goSequence = () => {
        Animated.sequence(
            [
                Animated.parallel([
                    Animated.timing(
                        opacity,
                        {
                            toValue: 0,
                            duration: 1000,
                        }
                    ),
                    Animated.decay(position, {
                        velocity: { x: 1, y: 1 }, // velocity from gesture release
                        deceleration: 0.997,

                        toValue: { x: 100, y: 400 },
                        duration: 1200
                    }),

                ]),

                Animated.parallel([


                    Animated.timing(position, {
                        toValue: { x: 10, y: 110 },
                        duration: 2000
                    }),
                    Animated.timing(
                        opacity,
                        {
                            toValue: 1,
                            duration: 1000,
                        }
                    )
                ])
            ]
        ).start();
    }

    const _goStop = () => {
        Animated.timing(opacity).stop();
    }
    const _goRestart = () => {
        Animated.timing(opacity).stop();
    }
    console.log('opacity', opacity)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Animated.View style={{
                    ...position.getLayout(),
                    opacity: opacity.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.3, 1]  // 0 : 150, 0.5 : 75, 1 : 0
                    }),
                    transform: [{
                        skewX: opacity.interpolate({
                            // duration: 2000,
                            inputRange: [0, 1],
                            outputRange: ['0deg', '180deg']  // 0 : 150, 0.5 : 75, 1 : 0
                        }),
                    },
                        // {
                        //     rotateY: opacity.interpolate({
                        //         // duration: 2000,
                        //         inputRange: [0, 1],
                        //         outputRange: ['0deg', '30deg']  // 0 : 150, 0.5 : 75, 1 : 0
                        //     }),
                        // }
                    ],
                }}>
                    <Ball />
                </Animated.View>
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <Button onPress={_goDown} text20B avoidMinWidth label='down' />
                <Button onPress={_goUp} text20B avoidMinWidth label='up' />
                <Button onPress={_goFate} text20B avoidMinWidth label='fate out' />
                <Button onPress={_goFateIN} text20B avoidMinWidth label='fate in' />
                <Button onPress={_goSequence} text20B avoidMinWidth label='_goSequence' />
                <Button onPress={_goStop} text20B avoidMinWidth label='stop' />
                <Button onPress={_goRestart} text20B avoidMinWidth label='start' />
            </View>

        </SafeAreaView>
    )
};


const Ball = () => {
    return (
        <View style={{ height: 30, width: 30, backgroundColor: '#000' }} />
    )
}

export default memo(App);