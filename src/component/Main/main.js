import React, { Component } from 'react';
import { View ,
    TouchableOpacity,
    Text,
    Image

} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import styles from '../../styles/styles';
const avatar=require("../../images/appIcon/avata.jpg")


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
    const {contianerDrawer,headerDrawer,imgAvatar,txtBigWhite}=styles;
    return (
      <View style={contianerDrawer} >
          <View style={headerDrawer} >
            <Image  style={imgAvatar} source={avatar} />
            <Text style={txtBigWhite}  >Đức Giang</Text>
          </View>
          <View style={{flex:5}} >
            <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props} />
            </DrawerContentScrollView>
          </View> 
      </View>

    );
  }

const Drawer = createDrawerNavigator();
  
export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContentOptions={{
                  activeTintColor: '#e91e63',
                  itemStyle: styles.itemDrawer,
                  inactiveTintColor:'#00cc99',
                  labelStyle:{fontSize:18}
                }}
                initialRouteName="Shop"
                drawerType="slide"
                hideStatusBar={false}
                drawerContent={props => <CustomDrawerContent {...props}
                
                 />}
            >
                <Drawer.Screen name="Shop" component={ShopScreen} />
                <Drawer.Screen name="OrderHistory" component={orderHistoryScreen} />
                <Drawer.Screen name="ChangeInfo" component={changeInfoScreen} />
                <Drawer.Screen name="Sign out" component={authenticationScreen} />
            
            </Drawer.Navigator>
        </NavigationContainer>
     
    );
  }
