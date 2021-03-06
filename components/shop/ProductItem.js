import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import Colors from '../../constants/Colors'

const ProductItem = props => {

    let TouchableCmp;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    } else {
        TouchableCmp = TouchableOpacity;
    }

    return (

        <View style={styles.product}>
            <View style={styles.touchable}>
                <TouchableCmp onPress={props.onViewDetail} useForeground>
                    <View>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: props.image }} />
                        </View>

                        <View style={styles.details}>
                            <Text style={styles.title}>{props.title}</Text>
                            <Text style={styles.price}>${props.price.toFixed(2)}</Text>
                        </View>

                        <View style={styles.actions}>
                            <Button color={Colors.primary} title="View Details" onPress={props.onViewDetail}>View Details</Button>
                            <Button color={Colors.primary} title="To Cart" onPress={props.onAddToCart}>To Cart</Button>
                        </View>
                    </View>
                </TouchableCmp>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20,
        overflow: 'hidden'
    },

    image: {
        width: '100%',
        height: '100%'
    },

    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
        marginVertical: 4
    },
    price: {
        fontFamily: 'open-sans-bold',
        fontSize: 14,
        color: '#888'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25%',
        paddingHorizontal: 20
    },
    details: {
        
        alignItems: 'center',
        height: '15%',
        padding: 5
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    touchable: {
        borderRadius: 10,
        overflow: 'hidden'
    }
});

export default ProductItem;