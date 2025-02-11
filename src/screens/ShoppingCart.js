import { FlatList, Pressable, View,Text } from 'react-native'; 
import cart from '../data/cart'; 
import CartListItem from '../components/CartListItem'; 
import { StyleSheet } from 'react-native';


const ShoppingCartTotals=()=>(
    <View style={styles.totalConatiner}>
        <View style={styles.row}>
            <Text style={styles.text}>SubTotal</Text>
            <Text style={styles.text}>410.00 US$</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.text}>Delivery</Text>
            <Text style={styles.text}>10.00 US$</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.textBold}>Total</Text>
            <Text style={styles.textBold}>420.00 US$</Text>
        </View>
    </View>
)

const ShoppingCart = () => { 
return ( 
    <>
    <FlatList 
        data={cart} 
        renderItem={({ item }) => <CartListItem cartItem={item} />} 
        ListFooterComponent={ShoppingCartTotals}/>

    <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
    </Pressable>
    </>); 
    }; 

const styles=StyleSheet.create({
    totalsContainer:{
        margin:20,
        paddingTop:10,
        borderColor:'gainboro',
        borderTopWidth:1

    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:2
    },
    text:{
        fontSize:16,
        color:'gray'
    },
    textBold:{
        fontSize:16,
        color:'gray',
        fontWeight:'500'
    },
    button:{
        position:'absolute',
        backgroundColor:'black',
        bottom:30,
        alignSelf:'center',
        padding:20,
        width:'90%',
        borderRadius:100,
        alignItems:'center'
    },
    buttonText:{
        color:'white',
        fontWeight:'500',
        fontSize:16
    }

})
export default ShoppingCart; 