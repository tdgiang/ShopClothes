import { StyleSheet,Dimensions } from 'react-native';
const bgColor='#00b38f';
const {width,height}=Dimensions.get('window');
const styles=StyleSheet.create({
    contianerDrawer:{
        flex:1,
        backgroundColor:bgColor
    },
    headerDrawer:{
        flex:3,
        justifyContent:'center',
        alignItems:'center'
    },
    itemDrawer:{
        backgroundColor:'white',
        marginTop:10,
        justifyContent:'center',
        paddingHorizontal:10,
        borderRadius:10
    },

    //img
    imgAvatar:{
        width:180,
        height:180,
        borderRadius:90,
        borderColor:'white',
        borderWidth:1
    },
    imgIcon:{
        width:30,
        height:30
    }, 
   
    imgStyleItemPro:{
        height:180,
        width:width/2-40,
        marginBottom:10
    },
    imgStyleBanner:{
        height:height/3-50,
        width:width-60,
    },



//Txt
    txtBigWhite:{
        color:'white',
        fontSize:22,
    },
    txtTitle:{
        fontSize:22,
        textTransform:'uppercase',
        color:'#a6a6a6',
        marginHorizontal:10,
        marginTop:5
    },
    txtNamePro:{
        fontSize:18,
        textTransform:'uppercase',
        color:'#a6a6a6'
    },
    txtPrice:{
        fontSize:18,
        textTransform:'uppercase',
        color:'red'
    },



    containerHeader:{
        height:90,
        backgroundColor:bgColor,
        paddingHorizontal:10,
        paddingVertical:10
    },
    rowBetween:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        },
    txtInputHeader:{
        padding:5,
        backgroundColor:'white',
        paddingHorizontal:20,
        fontSize:18,
        
    },
    containerCollection:{
        height:height/3,
        backgroundColor:'#ffffff',
        marginHorizontal:10,
        marginTop:10,
        elevation:5
        
    },

    boxBanner:{
        flex:1,
        alignItems:'center'
    },
    containerTopProfuct:{
        backgroundColor:'#ffffff',
        marginHorizontal:5,
        marginTop:10,
        elevation:5,

    },
    containerItem:{
        height:250,
        width:width/2-40,
        marginBottom:20,
        elevation:1,
        marginHorizontal:10,
        borderBottomColor:'#a6a6a6',
        alignItems:'center'
        
    },
    containerSile:{
        width:width-40,
        height:height/3-50
    }



})

export default styles;