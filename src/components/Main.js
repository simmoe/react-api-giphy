import React from 'react'

export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            term: '',
            img: ''
        }
    }
    onChange = (event) => {
        this.setState({term: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const api_key = 'xLNiiuCTPYTZA4gHLsiuUk67YYS6K4tz';
        const url = `https://api.giphy.com/v1/gifs/search?q=${this.state.term}&api_key=${api_key}&limit=1`;
        fetch(url)
            .then(response => response.json())
            .then(data => 
                this.setState({
                    term: '', 
                    img: data.data[0].images.fixed_height.url
                }, () => console.log(data)))
            .catch(e => console.log('error', e));
    }
    render() {
        return (
            <div className="page">
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.term} onChange={this.onChange}/>
                    <button>Search!</button>
                </form>
                <div className="img">
                    {this.state.img !== "" ? <img src={this.state.img} alt={this.state.term}/> : ""}
                </div>
            </div>
        )
    }
}
