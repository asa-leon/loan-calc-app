import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import type { RootState } from './redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/counterSlice'

export default function Index() {
	const count = useSelector((state: RootState) => state.counter.value)
	const dispatch = useDispatch()
	const [incrementAmount, setIncrementAmount] = useState('2')

	return (
		// CONTAINER
		<View style={styles.container}>
			<Text style={styles.indicateComponent}>Container</Text>

			{/* CIRCULAR PICTOGRAM WRAPPER */}
			<View style={styles.circularPictogramWrapper}>
				<Text style={styles.indicateComponent}>Circular Wrapper</Text>
				
				<CircularPictogram />
					
			</View>

			{/* CARDS WRAPPER */}
			<View style={styles.cardsWrapper}>
				<Text style={styles.indicateComponent}>Cards Wrapper</Text>

					{/* COMPONENT: CARDS */}
					<Card />
			</View>
		</View>
	)
}


// COMPONENT: CIRCULAR PICTOGRAM
export function CircularPictogram() {

	return (
		<View style={styles.innerTextsWrapper}>
			<Text style={styles.innerTexts}>Next Payment</Text>
			<Text style={styles.innerTexts}>¥10,000</Text>
			<Text style={styles.innerTexts}>@10/Dec/2024</Text>
		</View>
	)
}

// COMPONENT: CARD
export function Card() {
	const isAttached: boolean = false
	const attachedName: string = ''
	const defaultName: string = 'No Name'
	const cardName: string =  isAttached ? attachedName : defaultName

	return (
		<View style={styles.cards}>
			<Text style={styles.cardNames}>{cardName}</Text>
			<Text style={styles.cardDescriptions}></Text>
		</View>
	)
}

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		padding: 10,
		backgroundColor: 'rgba(200, 200, 200, 1)'
	},
	circularPictogramWrapper: {
		flex: 2,
		justifyContent: 'center',
	},
	cardsWrapper: {
		flex: 2,
		justifyContent: 'center',
	},

	// CIRCULAR PICTOGRAM
	innerTextsWrapper: {

	},
	innerTexts: {
		textAlign: 'center',
	},
	cards: {

	},
	cardNames: {

	},
	cardDescriptions: {

	},
	// Dev only ---**
	indicateComponent: {
		color: 'teal',
		textTransform: 'uppercase',
	}
})