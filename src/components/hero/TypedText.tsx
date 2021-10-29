import React, { useEffect, useRef, useState } from 'react'
import styles from '../../../styles/components/TypedText.module.scss'

export default function TypedText() {
	const [words, setWords] = useState<string>()
	const ref = useRef((text: string) => {
		setWords(text)
	})

	useEffect(() => {
		let mounted = false
		var data = {
			wordList: ['Mobile Developer', 'Frontend Developer', 'Backend Developer', 'UI & UX Designer'],
      temp: ['Hi', 'Halo', 'Bonjour', 'Aloha', '您好', 'こんにちは', '안녕하세요'],
			currentSalutation: '',
			currentIndex: 0,
			wrongWriteFlag: 0,
			cursorStatus: 0,
		}

		const removeWord = () => {
			data.currentSalutation = ''
		}

		const writeWord = () => {
			data.currentSalutation = data.wordList[data.currentIndex].substr(0, data.currentSalutation.length + 1)
			data.wrongWriteFlag = 0
			return 0
		}

		const process = async () => {
			if (mounted) return

			if (data.cursorStatus === 0) {
				removeWord()
				if (data.currentSalutation.length > 0) {
					setTimeout(process, 50 + Math.random() * 30)
				} else {
					data.cursorStatus = (data.cursorStatus + 1) % 2
					setTimeout(process, 300)
					data.currentIndex = (data.currentIndex + 1) % data.wordList.length
				}
			} else if (data.cursorStatus === 1) {
				data.cursorStatus = writeWord() == 2 ? 2 : data.cursorStatus
				if (
					data.currentSalutation.length < data.wordList[data.currentIndex].length ||
					data.cursorStatus == 2
				) {
					setTimeout(process, 100 + Math.random() * 30)
				} else {
					data.cursorStatus = (data.cursorStatus + 1) % 2
					setTimeout(process, 7500)
				}
			} else if (data.cursorStatus === 2) {
				removeWord()
				data.cursorStatus = 1
				setTimeout(process, 300 + Math.random() * 30)
			}
			ref.current(data.currentSalutation)
		}
		process()

		return () => {
			mounted = true
		}
	}, [])

	return <span className={`${styles.cursor}`}>{words}</span>
}