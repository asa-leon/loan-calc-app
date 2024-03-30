import { useState, useEffect } from 'react'

const CalcPayments = (
	{ debtBalance, interestRate, loanRepayments, repaymentAmount, year }: 
	{
		debtBalance: number, 
		interestRate: number, 
		loanRepayments: number, 
		repaymentAmount: number,
		year: number
	}
) => {

	let today: Date = new Date()
	let nextMonthFirstDaty: Date = new Date(today.getFullYear(), today.getMonth(), 1)
	nextMonthFirstDaty.setDate(nextMonthFirstDaty.getDate() - 1)
	const lastDayThisMonth: number = nextMonthFirstDaty.getDate()
	 
	

	const calcInterestAmountPerMonth = (db: number, ir: number, yr: number): number => {

		if (isLeapYear(yr)) {
			return db * (ir / 100) / 366 * lastDayThisMonth
		} else {
			return db * (ir / 100) / 365 * lastDayThisMonth
		}
	}

	const isLeapYear = (yearValue: number): boolean => {
		
		let year: number = new Date(yearValue, 1).getFullYear()
		let marchFirstDay: Date = new Date(year, 2, 1)
		marchFirstDay.setDate(marchFirstDay.getDate() - 1)

		const februaryLastDay: number = marchFirstDay.getDate()
		
		if (februaryLastDay == 29) {
			return true
		}
		
		return false
	}
	
	return ''
}

/* 変数の日本語訳
*  debtBalance: ローン残高、interestRate:金利、loanRepayments: 返済回数、repaymentAmount: 返済金額
*/
export default CalcPayments