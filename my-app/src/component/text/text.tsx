import { FC } from 'react'
import style from './text.module.css'
import { TextProps } from './text.props'

const Text: FC<TextProps> = ({ text }) => {
	return <p className={style.text}>{text}</p>
}

export default Text
