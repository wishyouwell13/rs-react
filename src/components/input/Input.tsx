import { Component, ReactNode } from 'react'
import styles from './input.module.css'

type Props = {
    // callback: () => void
    // text: string
}

export default class Input extends Component<Props> {
    render(): ReactNode {
        return (
            <input type="text" className={styles.input} />
        )
    }
}