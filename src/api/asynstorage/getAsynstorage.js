import AsyncStorage from '@react-native-community/async-storage';



export default getAsynStorage=async()=>{
    try {
        const arrCart=await AsyncStorage.getItem("ARRCART03");
        if(arrCart!=null)
            return JSON.parse(arrCart);
        return [];
        
    } catch (err) {
        console.log(err);
        return [];
    }
}