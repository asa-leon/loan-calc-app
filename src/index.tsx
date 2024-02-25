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
			<CircularInfograph />

			{/* COMPONENT: CARDS */}
			<Card />
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
		<View style={styles.infographWrapper}>
			<ProgressProvider valueStart={0} valueEnd={percentage}>
			{
				(value: number) => <View style={styles.infograph}>
					<CircularProgressbarWithChildren 
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
								<Text style={
									[styles.innerTextTitles, styles.upperText, styles.innerTextColor]}>Next Payment</Text>
								<Text style={[styles.innerTexts, styles.upperText, styles.innerTextColor]}>¥10,000</Text>
								<Text style={[styles.innerTexts, styles.upperText, styles.innerTextColor]}>@10/Dec/2024</Text>
							</View>
							<View style={styles.lowerTextArea}>
								<Text style={[styles.innerTextTitles, styles.lowerText, styles.innerTextColor]}>Loan Principal</Text>
								<Text style={[styles.innerTexts, styles.lowerText, styles.innerTextColor]}>¥375,000</Text>
							</View>
						</View>
						
					</CircularProgressbarWithChildren>
				</View>
			}
			</ProgressProvider>
		</View>
	)
}

import { Image } from 'react-native'

// COMPONENT: CARD
export function Card() {
	const isAttached: boolean = true
	const attachedName: string = 'Attached Name'
	const defaultName: string = 'No Name'
	const cardName: string =  isAttached ? attachedName : defaultName

	return (
		<View style={styles.cardsWrapper}>
			<View style={styles.cards}>
				<View style={styles.cardTextWrapper}>
					<Text style={styles.cardNames}>{cardName}</Text>
					<Text style={styles.cardDescriptions}>A simple description or/and an image is attached</Text>
				</View>
				{isAttached
					?	<Image 
							style={styles.cardImage}
							source={require('./images/credit-card-image.png')} />
					:	''
				}
			</View>
		</View>
	)
}

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		//backgroundColor: 'black',
	},

	// CIRCULAR INFOGRAPH
	infographWrapper: {
		flex: 1.6,
		alignItems: 'center',
		justifyContent: 'center',
		//backgroundColor: 'gray',
	},
	infograph: {
		width: 380,
		//backgroundColor: 'yellow'
	},
	innerTextsWrapper: {
		flex: 1,
		justifyContent: 'space-around',
		padding: 40,
	},
	innerTextColor: {
		color: '#111111',
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
		fontSize: 26,
		lineHeight: 26 * 1.5,
	},
	lowerTextArea: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	lowerText: {
		fontSize: 20,
		lineHeight: 20 * 1.5,
	},
	innerTexts: {
		textAlign: 'center',
	},

	// CARDS
	cardsWrapper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		//backgroundColor: 'cyan'
	},
	cards: {
		position: 'relative',
		width: 380,
		height: 234,
		backgroundColor: '#efefef',
		borderRadius: 5,
		borderColor: 'transparent',
		shadowColor: '#bebebe',
		shadowOffset: {
			width: 0,
			height: -2,
		},
	},
	cardTextWrapper: {
		zIndex: 10,
		flex: 1,
		justifyContent: 'space-between',
		padding: 30,
	},
	cardNames: {
		fontSize: 28,
		fontWeight: 'bold',
	},
	cardDescriptions: {
	},
	cardImage: {
		position: 'absolute',
		top: 0,
		left: 0,
		zIndex: -10,
		width: '100%',
		height: '100%',
		borderRadius: 5,
	},
	
})