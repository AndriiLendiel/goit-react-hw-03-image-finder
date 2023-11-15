import { Component } from "react";
import s from './SearchBar.module.css'

export class SearchBar extends Component {
    state = {
        name: '',
    }

    handleInput = (e) => {

        this.setState({name: e.currentTarget.value})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.name)
        this.setState({name: ''})

    }
    render() {
        return (
            <header className={s.Searchbar}>
            <form
            className={s.SearchForm}
            onSubmit={this.handleSubmit}
            >
            <button 
                    type="submit"
                    className={s.SearchForm__button}
                    >
                        <span className={s.SearchForm__button__label}>Search
                        </span>
                    </button>

                    <input 
                    className={s.SearchForm__input}
                    type="text" 
                    name="name"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={this.handleInput}
                    value={this.state.name}
                    />
            </form>
            </header>

        )
    }
}