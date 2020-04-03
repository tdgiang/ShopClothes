import { StyleSheet,Dimensions } from 'react-native';
const bgColor='#00997a';
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
    txtBtn:{
        fontSize:18,
        color:'white',
        textTransform:'uppercase',
        
    },
    txtWhite:{
        color:'white',
        fontSize:18,
        textAlign:'center'
    },
    txtLeftOrder:{
        color:'#a6a6a6',
        fontSize:18,
        fontWeight:'bold'
    },
    txtOrderId:{
        color:bgColor,
        fontSize:18
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
    txtInputSign:{
        paddingVertical:10,
        backgroundColor:'white',
        paddingHorizontal:20,
        fontSize:18,
        borderRadius:20,
        marginVertical:10
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
    },
    containerSignIn:{
        flex:1,
        marginTop:50,
        marginHorizontal:30
    },
    btnSign:{
        paddingVertical:10,
        borderRadius:20,
        borderColor:'white',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10,
    },
    btnLeft:{
        flex:1,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,

    },
    btnRight:{
        flex:1,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        borderTopRightRadius:20,
        borderBottomRightRadius:20
    },
    btnIfo:{
        backgroundColor:bgColor,
        paddingVertical:10,
        padding:5,
        justifyContent:'center',
        alignContent:'center',
        borderRadius:20,
        marginTop:10
    },
    footerAuthen:{
        height:100,
        flexDirection:'row',
        marginHorizontal:30
    },
    headerChangeInfo:{
        height:50,
        backgroundColor:bgColor,
        justifyContent:'space-between',
        flexDirection:'row',
       alignItems:'center',
       paddingHorizontal:10
    },
    containerOrder:{
        height:height/4,
        backgroundColor:'white',
        margin:10,
        elevation:3,
        padding:10,
        justifyContent:'center'
        
    }


})

export default styles;