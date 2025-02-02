import { Component, ReactNode } from 'react'
import styles from './button.module.css'

type Props = {
    text: string
    handler: () => void

}

export default class Button extends Component<Props> {
    render(): ReactNode {
        return (
            <button className={styles.button} onClick={this.props.handler}>
                {this.props.text}
            </button>
        )
    }
}