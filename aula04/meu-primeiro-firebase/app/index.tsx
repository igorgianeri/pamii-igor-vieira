import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCrE8dEtfYhzz5fN-UkpkzTtFLzT5zcEu8",
  authDomain: "meu-primeiro-firebase-3d538.firebaseapp.com",
  projectId: "meu-primeiro-firebase-3d538",
  storageBucket: "meu-primeiro-firebase-3d538.firebasestorage.app",
  messagingSenderId: "323286542365",
  appId: "1:323286542365:web:32bfd4454bdc7cbf797ef4"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const nomesCollection = firebase.firestore().collection('Nomes');
      const snapshot = await nomesCollection.get();

      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setNomes(data);
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Lista de Nomes:</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.box}>
          <FlatList
            data={nomes}
            keyExtractor={(item) => item.id}
            style={styles.list}
            contentContainerStyle={styles.listContent}
            renderItem={({ item, index }) => (
              <View style={styles.item}>
                <View style={styles.bullet} />
                <Text
                  style={[
                    styles.itemText,
                    { color: index % 2 === 0 ? '#000000' : '#ff0000' },
                  ]}
                >
                  {item.Nome} {item.Sobrenome}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#6a0dad',
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '700',
  },
  content: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  box: {
    width: '98%', 
    backgroundColor: '#ffffff',
    borderWidth: 1, 
    borderColor: '#ddd',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: 'center', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  list: {
    width: '100%',
  },
  listContent: {
    alignItems: 'center',
  },
  item: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  bullet: {
    width: 18, // ~70% of 26
    height: 18,
    borderRadius: 9,
    backgroundColor: '#6a0dad',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  itemText: {
    fontSize: 20,    // aumentado para ficar maior que o círculo
    fontWeight: '700', // negrito
    color: '#222',
  },
});