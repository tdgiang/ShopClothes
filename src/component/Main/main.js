import React, { Component } from 'react';
import { View ,
    TouchableOpacity,
    Text

} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';



import Shop from './Shop/shop';
import Authentication from '../Authentication/authentication';
import ChangeInfo from '../ChangeInfo/changeInfo';
import OrderHistory from '../OrderHistory/orderHistory';

function authenticationScreen({ navigation }) {
    return (
        <Authentication navigation={navigation} />
     
    );
}
  
function changeInfoScreen({ navigation }) {
    return (
      <ChangeInfo navigation={navigation}  />
    );
}
  
function orderHistoryScreen({ navigation }) {
    return (
      <OrderHistory navigation={navigation}  />
    );
  }

function ShopScreen({ navigation }) {
    return (
      <Shop navigation={navigation} />
    );
}
  
function CustomDrawerContent(props) {
    return (
        <View style={{flex:1,backgroundColor:'aqua'}} >
        
        <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
        </DrawerContentScrollView>  
      </View>

    );
  }

const Drawer = createDrawerNavigator();
  
export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Shop"
                drawerType="slide"
                hideStatusBar={false}
                drawerContent={props => <CustomDrawerContent {...props} />}
            >
                <Drawer.Screen name="Shop" component={ShopScreen} />
                <Drawer.Screen name="OrderHistory" component={orderHistoryScreen} />
                <Drawer.Screen name="ChangeInfo" component={changeInfoScreen} />
                <Drawer.Screen name="Authentication" component={authenticationScreen} />
            
            </Drawer.Navigator>
        </NavigationContainer>
     
    );
  }
