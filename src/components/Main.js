import React, {useState} from 'react'

const Main = (props) => {
    //state vars
    const [term, setTerm] = useState('')
    const [img, setImg] = useState('')

    const onChange = (event) => {
        setTerm(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const api_key = 'xLNiiuCTPYTZA4gHLsiuUk67YYS6K4tz';
        const url = `https://api.giphy.com/v1/gifs/search?q=${term}&api_key=${api_key}&limit=1`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setTerm()
                setImg(data.data[0].images.fixed_height.url)
            })
            .catch(e => console.log('error', e));
    }
    return (
        <div className="page">
            <form onSubmit={handleSubmit}>
                <input value={term} onChange={onChange}/>
                <button>Search!</button>
            </form>
            <div className="img">
                {img !== ""
                    ? <img src={img} alt={term}/>
                    : ""}
            </div>
        </div>
    )
}

export default Main;
