import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';



const styles = ({size,position, textColor, backgroundColor}) => StyleSheet.create({
    container: {
        flex: 1,
    },
     radius: {
        borderRadius: size/2,
        width: size,
        height:size,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        backgroundColor: backgroundColor,
        borderWidth: 2,
    },
    textStyle: {
        color: "white",
        fontSize: size/3,
    },
});

const RoundedButton = ({ 
    title, 
    size = 125, 
    position = 'center',
    textColor ='white',
    backgroundColor= '#a7c9db',
    style = {}, 
    textStyle = {},
    ...otherProps
}) =>{

    return(
        <TouchableOpacity style={[styles({size,position,
        textColor, backgroundColor}).radius,style]}
        {...otherProps}
        >
            <Text style={[styles({size}).textStyle, textStyle]}>{ title }</Text>
        </TouchableOpacity>
    )
}

export default RoundedButton;