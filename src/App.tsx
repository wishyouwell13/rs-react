import { Component, ReactNode } from "react";
import './App.css'

import Header from "./components/header/Header";
import Loader from "./components/loader/Loader";
import CardList from "./components/cardList/CardList";

import PokemonDTO from "./models/PokemonDTO";




interface PokeAPIResponse {
  count: number
  next: string
  previous: unknown
  results: PokemonDTO[]
}


export default class App extends Component {
  state = {
    isLoading: false,
    data: []
  }
  async fetchData(query?: string) {
    const searchQuery = query ? query.trim() : ''
    console.log(searchQuery);


    try {
      this.setState({ isLoading: true })

      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon${searchQuery ? '/' + searchQuery : ''}?limit=20&offset=0`
      )

      if (response.ok) {
        const data: PokeAPIResponse = await response.json()

        if (searchQuery) {
          this.setState({ data: [data] })
          localStorage['query'] = searchQuery;
        } else {
          this.setState({ data: data.results })
        }
      }

    } catch {
      this.setState({ data: [] })
    } finally {
      this.setState({ isLoading: false })

    }
  }

  async componentDidMount(): Promise<void> {
    console.log('mount');

    await this.fetchData();
  }

  render(): ReactNode {
    return (
      <>
        <Header onSearch={(query) => this.fetchData(query)} />
        <main className="content-wrapper">
          {this.state.isLoading ? <Loader /> : <CardList data={this.state.data} />}
        </main>
      </>
    )
  }
}


