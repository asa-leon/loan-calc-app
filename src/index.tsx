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
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import ProgressProvider from './functions/ProgressProvider'

export function CircularInfograph() {
	const percentage: number = 50
	const circleColor: string = 'rgb(200, 200, 200)'

	return (
		<View style={styles.infograph}>
			<ProgressProvider valueStart={0} valueEnd={percentage}>
				{(value: number) => <CircularProgressbarWithChildren 
					value={value}
					styles={{
						path: {
							stroke:  circleColor,
							strokeLinecap: 'butt',
							transition: 'ease-in 1000ms'
						},
						trail: {
							stroke:  circleColor,
							opacity: 0.3
						}
					}}
				>
					<View style={styles.innerTextsWrapper}>
						<View style={styles.upperTextArea}>
							<Text style={[styles.innerTextTitles, styles.upperText]}>Next Payment</Text>
							<Text style={[styles.innerTexts, styles.upperText]}>¥10,000</Text>
							<Text style={[styles.innerTexts, styles.upperText]}>@10/Dec/2024</Text>
						</View>
						<View style={styles.lowerTextArea}>
							<Text style={styles.innerTextTitles}>Loan Principal</Text>
							<Text style={styles.innerTexts}>¥375,000</Text>
						</View>
					</View>
					
				</CircularProgressbarWithChildren>}
				
			</ProgressProvider>
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
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 30,
		flexWrap: 'wrap',
	},
	innerTextTitles: {
		fontWeight: 'bold',
		textDecorationLine: 'underline',
	},
	upperTextArea: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center',
	},
	upperText: {
		fontSize: 18
	},
	lowerTextArea: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
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