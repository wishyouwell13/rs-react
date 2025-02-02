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

const LS_KEY = 'my_key';
export default class App extends Component {
  state = {
    isLoading: false,
    data: []
  }
  async fetchData(query?: string) {
    const search = query ? query.trim() : ''
    try {
      this.setState({ isLoading: true })
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`
      )

      if (response.ok) {
        const data: PokeAPIResponse = await response.json()

        // console.log(data.results);
        this.setState({ data: data.results })
      }

    } catch {
      this.setState({ data: [] })
    } finally {
      this.setState({ isLoading: false })

    }
  }



  async componentDidMount(): Promise<void> {
    await this.fetchData();
  }
  render(): ReactNode {
    return (
      <>
        <Header />

        <main className="content-wrapper">

          {this.state.isLoading ? <Loader /> : <CardList data={this.state.data} />}
          {/* {this.state.data} */}

        </main>
      </>
    )
  }
}


