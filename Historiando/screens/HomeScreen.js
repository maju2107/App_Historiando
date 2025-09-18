import * as React from 'react';

import { StyleSheet, Image, Text, View, FlatList, Dimensions} from 'react-native';
import Liz from '../assets/liz.png';
import Leo from '../assets/leo.png';

const personagens = [
    {id: '1', titulo: 'Liz (Elizabethe)          ', personalidade: 'Arteira\nCorajosa', imagem: Liz},
    {id: '2', titulo: 'Leo (Leonardo)        ', personalidade: 'Lerdo\nEsperto', imagem: Leo},
];

const {width, height}= Dimensions.get('window');

export default function HomeScreen(navigation) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Personagens do Historiando</Text>
            <FlatList
                data={personagens}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <View style={styles.item}>
                        <Image style={styles.img} source={item.imagem} />
                        <View>
                            <Text style={styles.texto}>{item.titulo}</Text>
                            <Text style={styles.Personalidade}>{item.personalidade}</Text>
                        </View>
                    </View>
                )}
            />
        </View>

     );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:20,
        backgroundColor:'rgba(7, 43, 89, 1)'
    },
    title: {
        fontSize:40,
        marginBottom:15,
        marginTop: 40,
        color: 'rgba(245, 32, 32, 1)'
    },
    item: {
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:4
    },
    img: {
        width:width*0.5,
        height:height*0.5,
        marginRight:10,
        borderRadius:5

    },
    texto: {
        fontSize:20,
        fontWeight:'bold',
        color: 'rgba(245, 32, 32, 1)'
    },

    Personalidade: {
        color: 'rgba(200, 193, 193, 1)',
        fontSize: 14
    }
    
});