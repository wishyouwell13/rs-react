import { Component, ReactNode } from 'react';
import styles from './header.module.css'

import Input from '../input/Input';
import Button from '../button/Button';

export default class Header extends Component {
    render(): ReactNode {
        const buttonName = "Search";
        return (

            <header className={styles.header}>
                <div className='content-wrapper'>
                    <div className={styles.headerInner}>

                        <Input />
                        <Button text={buttonName} callback={() => console.log('asd')}></Button>
                    </div>
                </div>
            </header>

        )
    }

}