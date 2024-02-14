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

			{/* CIRCULAR Infograph WRAPPER */}
			<View style={styles.circularInfographWrapper}>
				
				<CircularInfograph />
					
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

// COMPONENT: CIRCULAR INFOGRAPH
import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export function CircularInfograph() {
	const percentage: number = 50

	return (
		<View style={styles.infograph}>
			<CircularProgressbarWithChildren value={percentage} /* text={`${percentage}%`} */ >
				<View style={styles.innerTextsWrapper}>
					<View style={styles.upperText}>
						<Text style={styles.innerTexts}>Next Payment</Text>
						<Text style={styles.innerTexts}>¥10,000</Text>
						<Text style={styles.innerTexts}>@10/Dec/2024</Text>
					</View>
					<View style={styles.lowerText}>
						<Text style={styles.innerTexts}>Loan Principal</Text>
						<Text style={styles.innerTexts}>¥375,000</Text>
					</View>
				</View>
				
			</CircularProgressbarWithChildren>
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
	circularInfographWrapper: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center',
	},
	cardsWrapper: {
		flex: 2,
		justifyContent: 'center',
	},

	// CIRCULAR INFOGRAPH
	infograph: {
		width: '70%',
	},
	innerTextsWrapper: {
		flex: 1,
		justifyContent: 'space-around',
		padding: '5%',
	},
	upperText: {

	},
	lowerText: {

	},
	innerTexts: {
		textAlign: 'center',
	},

	// CARDS
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