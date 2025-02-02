import { Component, ReactNode } from 'react'
import styles from './button.module.css'

interface Props {
    text: string
    handler: () => void
    className?: string


}

export default class Button extends Component<Props> {
    render(): ReactNode {
        return (
            <button className={`${styles.button} ${this.props.className}`} onClick={this.props.handler} >
                {this.props.text}
            </button>
        )
    }
}