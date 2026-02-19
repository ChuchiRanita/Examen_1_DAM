import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';

import { Feather } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const App = () => {
  const [numberLikes, setNumberLikes] = useState(0);
  const [likeColor, setLikeColor] = useState('#7e7d7d');
  const [saveColor, setSaveColor] = useState('#000000');
  const [radiusColor, setBorderColor] = useState('#b404ff');
  const [isOpen, setIsOpen] = useState(false);
  const [historyViews, setHistoryViews] = useState(1);

  const handleHistoryViews = () => {
    if (!isOpen) {
    setHistoryViews(historyViews + 1);
    }
  };
  const toggleHistory = () => {
    setIsOpen(!isOpen);
  }

  const handleBorderColor = () => {
    if (radiusColor === '#b404ff') {
      setBorderColor('#494949');
    }
  };
  const handleLikesAndColor = () => {
    if (likeColor === '#7e7d7d') {
      setLikeColor('#ff0000');
      setNumberLikes(numberLikes + 1);
    } else {
      setLikeColor('#7e7d7d');
      setNumberLikes(numberLikes - 1);
    }
  };
  
  const handleSaveColor = () => {
    if (saveColor === '#000000') {
      setSaveColor('#113dff');
    } else {
      setSaveColor('#000000');
    }
  };

  const [fontsLoaded] = useFonts({
    insta: require('./assets/fonts/VeganStylePersonalUse-5Y58.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.MainContainer}>
      <View style={styles.TitleBar}>
      <Text style={styles.titleText}>
        Instagram
      </Text>
      </View>
      
      <ScrollView>
      {/* Imagen perfil */}
      <TouchableOpacity onPress={() => {handleBorderColor(); handleHistoryViews(); toggleHistory();}}>
      <View style={[styles.photoProfileContainer, { borderColor: radiusColor }]}>
          <Image style={styles.photoProfile} source={require('./assets/images/photoProfile.jpg')} />
      </View>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.hisoryContainer}>
          <Text style={styles.ViewsText}>Historia de Chuchi_Frog</Text>
          <Image
            style={styles.historyPhoto}
            source={require('./assets/images/history.gif')}
          />
          <Text style={styles.blurText}>I luv u so much</Text>
          <Text style={styles.ViewsText}>{historyViews} views</Text>
        </View>
      )}
      <Text style={styles.ViewsText}>
          Chuchi_Frog
      </Text>
      {/* Imagen principal */}
      <View style={styles.photoContainer}>
        <Image
          style={styles.photo}
          source={require('./assets/images/jjk.jpg')}
        />
      </View>
      {/* Contenedor con iconos debajo de la imagen */}
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={handleLikesAndColor}>
        <Feather name="heart"style={[styles.initialIcon, { color: likeColor }]} />
        </TouchableOpacity>
        <Text style={styles.ViewsText}>{numberLikes>0 ? `${numberLikes} ` : ''}</Text> 
        <Feather name="message-circle" style={styles.Icon} />
        <Feather name="send" style={styles.Icon} />
        {/*No habia icono parecido en Feather */}
        <MaterialCommunityIcons name="dots-horizontal" style={styles.Icon} />
        <TouchableOpacity onPress={handleSaveColor}>
        <Feather name="bookmark" style={[styles.finalIcon, { color: saveColor }]} />
        </TouchableOpacity>
      </View>
      {/* Contenedor de texto */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.ViewsText}>
          1,234,567 Views
        </Text>
        <Text style={styles.descriptionText}>
          Depressed.
        </Text>
        <Text style={styles.tagText}>
          #jjk #jujutsukaisen #anime
        </Text>
        <Text style={styles.blurText}>
          View all 123,456 comments
        </Text>
        <Text style={styles.blurText}>
          3 hours ago.
        </Text>
      </View>
      </ScrollView>
      {/* Barra de navegacion, reutilizando estilos del anterior contenedor de iconos*/}
      <View style={styles.iconsContainer}> 
        <Feather name="home"style={styles.initialIcon2} />
        <Feather name="search" style={styles.Icon2} />
        <Feather name="plus-square" style={styles.Icon2} />
        <Feather name="heart"style={styles.Icon2} />
        <Feather name="user" style={styles.finalIcon2} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    fontFamily: 'insta', 
  },
  TitleBar: {
    backgroundColor: '#ffffff',
    width: '100%',
    padding: 10,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    width: '100%',
    height: 3,
  },
  photo: {
    width: '90%',
    height: 400,
  },
  // Estilos para iconos debajo de la imagen
  initialIcon: {
    fontSize: 35,
  },
  Icon: {
    fontSize: 35,
    color: '#000000',
    marginLeft: 20,
  },
  finalIcon: {
    fontSize: 35,
    marginLeft: 110,
    marginRight: 10,
  },
  //estilos para contenedores
  MainContainer: {
    flex: 1,
    backgroundColor: '#e3e3e3',
    alignItems: 'stretch',
  },
  descriptionContainer: {
    width: '100%',
    padding: 10,
    bottom: 10,
    height: 175,
  },
  iconsContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingTop: 5,
  },
  photoContainer: {
    backgroundColor: '#000000',
    width: '100%',
    height: "auto",
    borderRadius: 10,
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 8,
      // propiedades de sombra para imagen
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  // Estilos para textos
  ViewsText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 14,
    color: '#333333',
    textAlign: 'justify',
  },
  tagText: {
    fontSize: 14,
    color: '#0048ff',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  blurText: {
    fontSize: 12,
    color: '#888888',
  },
  // estilos de iconos barra de navegacion
  initialIcon2: {
    fontSize: 45,
    color: '#000000',
  },
  Icon2: {
    fontSize: 45,
    color: '#000000',
    marginLeft: 35,
  },
  finalIcon2: {
    fontSize: 45,
    color: '#000000',
    marginLeft: 'auto',
    marginRight: 10,
  },
  // estilos para foto de perfil
  photoProfileContainer: {
    width: '100%',
    alignItems: 'left',
    marginBottom: 10,
  },
  photoProfile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
  },
  hisoryContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  historyPhoto: {
    width: 200,
    height: 200,
    borderRadius: 3,
    marginBottom: 10,
  },
});
export default App;