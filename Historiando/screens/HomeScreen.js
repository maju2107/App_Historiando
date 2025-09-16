import * as React from 'react';

import { StyleSheet, Image, Text, View, FlatList, SectionList } from 'react-native';

const personagens = [
    {id: '1', titulo: 'Liz (Elizabethe) ', personalidade: 'arteira', imagem:'https://picsum.photos/200/300?7'},
    {id: '2', titulo: 'Leo (Leonardo)', personalidade: 'calmo', imagem:'https://picsum.photos/200/300?7'},
    {id: '3', titulo: 'Mãe', personalidade: 'estressada',imagem:'https://picsum.photos/200/300?7'},
    {id: '4', titulo: 'Pai', personalidade: 'maluco', imagem:'https://picsum.photos/200/300?7'},
];

const palavras = [
    {
        title: 'Informações',
        data:[
            {id:'1', nome:'personagem principal', img:'https://picsum.photos/200/300?7'},
             {id:'2', nome:'personagem principal', img:'https://picsum.photos/200/300?7'},
        ]
    },

     {
        title: '',
        data:[
            {id:'2', nome:'personagem principal', img:'https://picsum.photos/200/300?7'},
             {id:'3', nome:'personagem principal', img:'https://picsum.photos/200/300?7'},
        ]
    },

     {
        title: 'Informações',
        data:[
            {id:'5', nome:'personagem principal', img:'https://picsum.photos/200/300?7'},
             {id:'6', nome:'personagem principal', img:'https://picsum.photos/200/300?7'},
        ]
    },

     {
        title: 'Informações',
        data:[
            {id:'7', nome:'personagem principal', img:'https://picsum.photos/200/300?7'},
             {id:'8', nome:'personagem principal', img:'https://picsum.photos/200/300?7'},
        ]
    },
]

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

            {/* <Text style={styles.title}>Outras Histórias</Text>
            <SectionList
                sections={palavras}
                inverted
                keyExtractor={(item) => item.id}
                renderSectionHeader={({section}) =>(
                    <Text styles={styles.header}>{section.title}</Text>
                )}
                renderItem={({item}) => (
                        <View style={styles.item}>
                            <Image style={styles.img2} source={{ uri: item.img}} />
                            <View>
                                <Text style={styles.text}>{item.nome}</Text>
                            </View>
                        </View>
                )}
            
            /> */}
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
        fontSize:22,
        marginBottom:15
    },
    item: {
        flexDirection:'row',
        marginBottom:15,
        alignItems:'center',
        paddingHorizontal:10
    },
    img: {
        width:60,
        height:90,
        marginRight:10,
        borderRadius:5

    },
    img2:{
        width:50,
        height:50,
        marginRight:10,
        borderRadius:8

    },
    text: {
        fontSize:16, fontWeight:'bold'
    },
    header:{
        fontSize:18,
        fontWeight:'bold',
        marginTop:10
    }
});