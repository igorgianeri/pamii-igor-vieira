import React from 'react';
import { Tabs } from 'expo-router';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

function ChatsHeader() {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.headerTopRow}>
        <Text style={styles.headerTitle}>Whatsappz</Text>

        <View style={styles.headerIconsRow}>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.6}>
            <Ionicons name="camera-outline" size={22} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.6}>
            <MaterialIcons name="more-vert" size={22} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.searchBox}>
        <Ionicons name="search-outline" size={18} color="#666" style={{ marginRight: 8 }} />
        <TextInput
          placeholder="Pesquisar"
          placeholderTextColor="#666"
          style={styles.searchInput}
          editable={false}
        />
      </View>
    </View>
  );
}

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,                      // sem header por padrão
        tabBarStyle: { backgroundColor: '#075E54' },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#dcdcdc',

        tabBarIcon: ({ color, size }) => {
          if (route.name === 'index') {
            return <Ionicons name="chatbubbles-outline" size={size} color={color} />;
          }
          if (route.name === 'StatusScreen') {
            return <MaterialCommunityIcons name="progress-clock" size={size} color={color} />;
          }
          if (route.name === 'CallsScreen') {
            return <Ionicons name="call-outline" size={size} color={color}/>
          }
        },
      })}
      initialRouteName="index"
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Chats',
          headerShown: true,       // header só aqui
          header: () => <ChatsHeader />,
        }}
      />

      <Tabs.Screen
        name="StatusScreen"
        options={{
          title: 'Status',
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="CallsScreen"
        options={{
          title: 'Chamadas',
          headerShown: false,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: '#075E54',
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 12,
  },
  headerTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIconsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 6,
    marginLeft: 8,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 2,
  },
});
