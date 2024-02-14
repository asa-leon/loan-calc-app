import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import type { RootState } from './redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/counterSlice'

export default function Index() {
	const count = useSelector((state: RootState) => state.counter.value)
	const dispatch = useDispatch()
	const [incrementAmount, setIncrementAmount] = useState('2')

	return (
		<div style={{
			width: 360,
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-around'
		}}>
			<div>
				<button
					aria-label='Increment value'
					onClick={() => dispatch(increment())}
				>
					Increment
				</button>

				<span>Counter: {count}</span>

				<button
					aria-label='Decrement value'
					onClick={() => dispatch(decrement())}
				>
					Decrement
				</button>
			</div>

			<div>
				<input
					aria-label='Set increment amount'
					value={incrementAmount}
					onChange={e => setIncrementAmount(e.target.value)} 
				/>
				<button onClick={() =>
					dispatch(incrementByAmount(Number(incrementAmount) || 0))
					}
				>
					Add Amount
				</button>
			</div>
		</div>
	)
}