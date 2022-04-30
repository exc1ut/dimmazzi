import i18n from "../lib/i18n"

const {t} = i18n

type HourType = `${number}:${number}:${number}` 


export const getTime = (time:HourType) => {
	const arr = time.split(':')
	const hour = arr[0] === '00'? undefined:`${arr[0]} ${t`soat`}`
	const minute = arr[1] === '00'? undefined:`${arr[1]} ${t`minut`}`

	return `${hour} ${minute}`
}