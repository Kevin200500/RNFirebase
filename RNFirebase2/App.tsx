/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
 
 import React,{useState} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   TextInput,
   Button
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
//  import firebase  from './database/firebase';
import firestore from '@react-native-firebase/firestore';
 const Section: React.FC<{
   title: string;
 }> = ({children, title}) => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={styles.sectionContainer}>
       <Text
         style={[
           styles.sectionTitle,
           {
             color: isDarkMode ? Colors.white : Colors.black,
           },
         ]}>
         {title}
       </Text>
       <Text
         style={[
           styles.sectionDescription,
           {
             color: isDarkMode ? Colors.light : Colors.dark,
           },
         ]}>
         {children}
       </Text>
     </View>
   );
 };
 
 
 const App = () => {
   const [name,setName] = useState('');
 const [lastName,setLastName] = useState('');
 const [edad,setEdad] = useState('');
 const [pelicula,setPelicula] = useState('');
 const [generoPelicula,setGeneroPelicula] = useState('');
 const [juego,setJuego] = useState('');
 const [precio,setPrecio] = useState('');
 const enviarFirebase = async()=>{
   await firestore().collection('users').add({
      name,
      lastName,
      edad
   });
   await firestore().collection('peliculas').add({
     pelicula,
     generoPelicula
 });
 await firestore().collection('juegos').add({
     juego,
     precio
});
 }
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   return (
     <SafeAreaView style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
         <View>
         <Text>Usuario</Text>
         <TextInput        
         onChangeText={newName => setName(newName)}
         placeholder="Ingrese el nombre"
         />   
         <TextInput        
         onChangeText={newLastName => setLastName(newLastName)}
         placeholder="Ingrese el Apellido"
         />  
         <TextInput        
         onChangeText={newEdad => setEdad(newEdad)}
         placeholder="Ingrese la edad"
         /> 
         <Text>Pelicula</Text>
         <TextInput        
         onChangeText={newPelicula => setPelicula(newPelicula)}
         placeholder="Ingrese la edad"
         /> 
         <TextInput        
         onChangeText={newGeneroPelicula => setGeneroPelicula(newGeneroPelicula)}
         placeholder="Ingrese Genero de la pelicula"
         /> 
         <Text>Juego</Text>
         <TextInput        
         onChangeText={newJuego => setJuego(newJuego)}
         placeholder="Ingrese el juego"
         /> 
         <TextInput        
         onChangeText={newPrecio => setPrecio(newPrecio)}
         placeholder="Ingrese precio del juego"
         /> 
         <Button 
         onPress={enviarFirebase}
         title="Enviar Firebase"/>
         </View>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;
 