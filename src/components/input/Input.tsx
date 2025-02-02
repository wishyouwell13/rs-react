import React, { Component, ReactNode } from 'react'
import styles from './input.module.css'

interface Props {
    value: string
    search: () => void
}

export default class Input extends Component<Props> {
    render(): ReactNode {
        return (
            <input
                type="text"
                value={this.props.value}
                className={styles.input}
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => this.props.search(e.target.value)}
            />
        )
    }
}