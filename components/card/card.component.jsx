import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import {colorDefault} from '../../utils/colors';


const styles = StyleSheet.create({
    card: {
        backgroundColor: colorDefault.ice,
        margin: 10,
        borderRadius: 20,
        flex: 1,
        width: '50vh',
        overflow: 'hidden',
    },
    content: {
        backgroundColor: colorDefault.salmon,
    },
    cover: {
        height: 220,
    },
});

const CardQuote = ({task, background}) => {

    return (
        <Card style={styles.card}>
            <Card.Cover
                style={styles.cover}
                resizeMode={`cover`}
                source={{ uri: background }} />
            <Card.Content style={styles.content}>
            </Card.Content>
            <Card.Actions>
                <Paragraph>{task}</Paragraph>
            </Card.Actions>
        </Card>
    )
}

export default CardQuote;