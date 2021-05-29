import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import RoundedButton from '../../components/rounded-button/rounded-button.component';
import { colors } from '../../utils/colors';
import { spacing, fontSize } from '../../utils/sizes';
import CountDown from '../../components/countdown/countdown.component';
import { ProgressBar } from 'react-native-paper';


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        color: colors.white,
        textAlign: 'center',
        fontSize: fontSize.xl,
    },
    task: {
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: fontSize.xl,
    },
    countDown: {
        flex: 0.5,
        paddign: spacing.md,
        justifyContent: 'center',
        alignContent: 'center',
    },
    buttonWrapper: {
        flex: 0.3,
        paddign: spacing.md,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    }
});

const Timer = ({ focusSubject }) => {

    const [progress, setProgress] = useState(1);
    const [minutes, setMinutes] = useState(null);
    const [isStarted, setIsStarted] = useState(false);

    const onProgress = (progress) => {
        setProgress(progress);
    }

    const onChangeTime = (min) => {
        setMinutes(min);
        setProgress(1);
        setIsStarted(false);
    }

    return (
        <View style={styles.container}>
            <View style={styles.countDown}>
                <CountDown 
                minutes={minutes}
                isPaused={isStarted}
                onProgress={onProgress} 
                />
            </View>
            <View style={{ paddingTop: spacing.xxxl }}>
                <Text style={styles.title}> Meu foco agora é: </Text>
                <Text style={styles.task}> {focusSubject} </Text>
            </View>
            <View style={{ padding: spacing.sm }}>
                <ProgressBar
                    progress={progress}
                    color={colors.Facebook}
                    style={{ height: 20 }}
                    borderRadius={50}>
                </ProgressBar>
            </View>

            <View>
                <Timing
                    onChangeTime={onChangeTime}
                />
            </View>




            <View style={styles.buttonWrapper}>
                {isStarted ?
                    (<RoundedButton
                        title="Start"
                        backgroundColor='#56e30e'
                        onPress={() => setIsStarted(false)}
                    />)
                    :
                    (<RoundedButton
                        title="Pause"
                        backgroundColor='#bf0000'
                        onPress={() => setIsStarted(true)}
                    />)
                }

            </View>
        </View>
    )
}

export default Timer;