import React from 'react';
import { View, Text, Button } from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ℹ️ Tela Sobre</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
