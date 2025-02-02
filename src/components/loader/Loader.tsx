import { Component, ReactNode } from "react";
import LoaderIcon from '../../assets/loader.svg'
import styles from './loader.module.css'

export default class Loader extends Component {
    render(): ReactNode {
        return (

            <img className={styles.loader} src={LoaderIcon} width="50" alt="" />
        )
    }
}