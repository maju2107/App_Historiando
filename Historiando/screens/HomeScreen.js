import * as React from 'react';

import { StyleSheet, Image, Text, View, FlatList, Dimensions} from 'react-native';

const personagens = [
    {id: '1', titulo: 'Liz (Elizabethe) ', personalidade: 'arteira', imagem:'../assets/liz.png'},
    {id: '2', titulo: 'Leo (Leonardo)', personalidade: 'calmo', imagem:'../assets/leo.png'},
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
                        <Image style={styles.img} source={{ uri: item.imagem}} />
                        <View>
                            <Text style={styles.text}>{item.titulo}</Text>
                            <Text>{item.personalidade}</Text>
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
        paddingHorizontal:10
    },
    img: {
        width:width*1,
        height:heigth*1,
        marginRight:10,
        borderRadius:5

    },
    text: {
        fontSize:16,
        fontWeight:'bold',
        color: 'rgba(245, 32, 32, 1)'
    },
    
});