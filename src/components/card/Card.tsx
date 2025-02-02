import { Component, ReactNode } from "react";

import PokemonDTO from "../../models/PokemonDTO";

import styles from './card.module.css'

// 'https://img.pokemondb.net/artwork/ditto.jpg'

export default class Card extends Component<PokemonDTO> {
    render(): ReactNode {

        const URL = `https://img.pokemondb.net/artwork/${this.props.name}.jpg`
        return (
            <div className={styles.card}>
                <h5 className={styles.title}>{this.props.name}</h5>
                <img src={URL} className={styles.image} alt={this.props.name} />
            </div>
        )
    }
}