import React from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    Button,
    StyleSheet
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../constants/Colors'
import * as cartActions from '../../store/actions/cart';

const Stack = createNativeStackNavigator();



const ProductDetailScreen = (props) => {
    const productId = props.route.params.productId;
    const selectedProduct = useSelector(state => state.products.availableProducts.find(p => p.id === productId));
    const dispatch = useDispatch();
    props.navigation.setOptions({headerTitle: selectedProduct.title})
    return (
        <ScrollView>
            <Image source={{uri: selectedProduct.imageUrl}}  style={styles.image}/>
            <View style={styles.actions}>
            <Button color= {Colors.primary} title="Add to cart" onPress={() =>{dispatch(cartActions.addToCart(selectedProduct))}}/>
            </View>
            <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text> 
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 300
    },
    price:{
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20,
        fontFamily: 'open-sans-bold',
    },
    description: {
        fontFamily: 'open-sans',
        fontSize: 14,
        textAlign: 'center',
        marginVertical: 20
    },
    actions: {
        marginVertical: 10,
        alignItems: 'center'
    }
});

export default ProductDetailScreen;