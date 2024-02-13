import { StatusBar } from 'expo-status-bar'
import '@expo/metro-runtime'
import { registerRootComponent } from 'expo'
import { StyleSheet, Text, View } from 'react-native'

import { store } from './src/redux/store'
import { Provider } from 'react-redux'

import Index from './src/index'

export default function App() {
	
  return (
	<Provider store={store}>
		<View style={styles.container}>
			<Index />
			<StatusBar style="auto" />
		</View>
	</Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

registerRootComponent(App)