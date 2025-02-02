import { Component, ReactNode } from 'react';
import styles from './header.module.css'

import Input from '../input/Input';
import Button from '../button/Button';

interface Props {
    onSearch: (value: string) => void
}
interface State {
    value: string
}

export default class Header extends Component<Props, State> {
    state = {
        value: localStorage.getItem('query') || '',
    }
    render(): ReactNode {
        const buttonName = "Search";

        return (

            <header className={styles.header}>
                <div className='content-wrapper'>
                    <div className={styles.headerInner}>
                        <Input value={this.state.value} search={(pokemon: string) => this.setState({ value: pokemon })} />
                        <Button text={buttonName} handler={() => this.props.onSearch(this.state.value)}></Button>
                    </div>
                </div>
            </header>

        )
    }

}