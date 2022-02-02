import { useState } from 'react'

export default function useLocalStorage<T>(key: string, initialValue: T) {
	const [storedValue, setStoredValue] = useState<T>(() => {
		try {
			const item = localStorage.getItem(key)
			return item ? JSON.parse(item) : initialValue
		} catch {
			return initialValue
		}
	})

	const setValue = (value: T | ((val: T) => T)) => {
		try {
			// Allow value to be a function so we have same API as useState
			const valueToStore =
				value instanceof Function ? value(storedValue) : value
			setStoredValue(valueToStore)
			localStorage.setItem(key, JSON.stringify(valueToStore))
		} catch {
			// A more advanced implementation would handle the error case
			!localStorage.getItem(key) &&
				localStorage.setItem(key, JSON.stringify(initialValue))
		}
	}
	return [storedValue, setValue] as const
}
