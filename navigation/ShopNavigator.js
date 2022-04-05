import "react-native-gesture-handler";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform, View, Text, StyleSheet } from "react-native";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import Colors from "../constants/Colors";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/UI/HeaderButton";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
import DrawerButton from "../components/UI/DrawerButton";
import UserProductsScreen from "../screens/user/UserProductsScreen";
import EditProductScreen from "../screens/user/EditProductScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const navigationOptions = ({ navigation }) => {
    return {
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primary : "",
            //fontFamily: "open-sans-bold",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
        headerBackTitleStyle: {
            fontFamily: "open-sans",
        },

        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Cart"
                    iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
                    onPress={() => {
                        navigation.navigate("Cart");
                    }}
                />
            </HeaderButtons>
        ),
    };
};

const buttonNav = ({navigation}) => {
    return {
        title: "Your Products" ,
        headerRight: ({}) => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Add"
                iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
                onPress={({})=>{
                    navigation.navigate('EditProduct');
                }}
              />
            </HeaderButtons>
        )
}
}

const ShopNavigator = ({navigation}) => {

    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => <Opciones {...props} />}
                screenOptions={navigationOptions}
            >
                <Stack.Screen
                    name="ProductOverview"
                    component={ProductsOverviewScreen}
                    options={{
                        title: "All Products",
                    }}
                />
                <Stack.Screen
                    name="ProductDetail"
                    component={ProductDetailScreen}
                    options={({ props }) => ({
                        //title: route.params.title
                    })}
                />
                <Stack.Screen
                    name="Cart"
                    component={CartScreen}
                    options={{ title: "Cart", headerRight: null }}
                />
                <Stack.Screen
                    name="Orders"
                    component={OrdersScreen}
                    options={{ title: "Orders"}}
                />
                <Stack.Screen
                    name="UserProduct"
                    component={UserProductsScreen}
                    options={buttonNav}
                />
                <Stack.Screen
                    name="EditProduct"
                    component={EditProductScreen}
                    options={{ title: "Edit"}}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};
const Opciones = ({ navigation }) => {
    return (
        <DrawerContentScrollView style={styles.container}>
            <Text style={styles.title}>Menú</Text>
            <DrawerButton
                text={<Text style={styles.text}>Products</Text>}
                onPress={() => {
                    navigation.navigate("ProductOverview");
                }}
                iconName="shirt"
            />
            <DrawerButton
                text={<Text style={styles.text}>Orders</Text>}
                onPress={() => {
                    navigation.navigate("Orders");
                   
                }}
                iconName={Platform.OS === "android" ? "md-list" : "ios-list"}
            />
            <DrawerButton
                text={<Text style={styles.text}>Admin</Text>}
                onPress={() => {
                    navigation.navigate("UserProduct");
                   
                }}
                iconName={Platform.OS === "android" ? "md-create" : "ios-create"}
            />
        </DrawerContentScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: Colors.primary
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
        color: 'white'
    },

    text: {
        fontSize: 16,
        paddingLeft: 10
    }
});

export default ShopNavigator;