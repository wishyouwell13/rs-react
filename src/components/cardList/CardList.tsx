import { Component, ReactNode } from "react";
import styles from './cardList.module.css'

import Card from "../card/Card";

import PokemonDTO from "../../models/PokemonDTO";

interface CardListProps {
    data: PokemonDTO[]
}

export default class CardList extends Component<CardListProps> {

    render(): ReactNode {
        return (
            <div>

                {!!this.props.data.length && (
                    <ul className={styles.cardList}>
                        {this.props.data.map((poke) => (
                            <Card key={poke.name} {...poke} />
                        ))}
                    </ul>
                )}

                {!this.props.data.length && (
                    <h2>Wrong request! 404</h2>
                )}
            </div>
        )
    }
} 