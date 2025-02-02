import { Component, ReactNode } from "react";
import './App.css'

import Header from "./components/header/Header";
import Loader from "./components/loader/Loader";
import CardList from "./components/cardList/CardList";
import Button from "./components/button/Button";

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
    data: [],
    error: false,
  }
  async fetchData(query?: string) {
    const searchQuery = query ? query.trim() : ''


    try {
      this.setState({ isLoading: true })

      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon${searchQuery ? '/' + searchQuery : ''}?limit=20&offset=0`
      )

      if (response.ok) {
        const data: PokeAPIResponse = await response.json()

        if (searchQuery) {
          this.setState({ data: [data] })

        } else {
          this.setState({ data: data.results })
        }
      }

    } catch {
      this.setState({ data: [] })
    } finally {
      localStorage['query'] = searchQuery;


      this.setState({ isLoading: false })

    }
  }

  async componentDidMount(): Promise<void> {
    const query = localStorage.getItem('query') || '';
    await this.fetchData(query);
  }

  render(): ReactNode {
    if (this.state.error) {

      throw new Error('ERROR! ERROR! ERROR!')
    }
    return (
      <>
        <Header onSearch={(query) => this.fetchData(query)} />
        <main className="content-wrapper">
          {this.state.isLoading ? <Loader /> : <CardList data={this.state.data} />}
        </main>
        <button

        >

        </button>

        <Button
          handler={() => this.setState({ error: true })}
          className="redButton"
          text="ERROR"
        >

        </Button>
      </>
    )
  }
}


