import { Component, ReactNode } from 'react'

//components
import Button from '../button/Button'

// styles
import styles from './fallback.module.css'

interface Props {
    reload: () => void
}

export default class Fallback extends Component<Props> {
    render(): ReactNode {
        return (
            <div className={styles.fallback}>
                <Button text="Reload" handler={this.props.reload} />
                <div className={styles.text}>
                    ERROR!!!
                </div>
            </div>
        )
    }
}