import React, {useState} from 'react'

const Main = (props) => {
    // state vars - check with the api docs:
    // https://www.boredapi.com/documentation#endpoints-random

    //Se også https://api.publicapis.org/
    const [activity,setActivity] = useState('')
    const [type,setType] = useState('')
    const [participants,setParticipants] = useState('')
    const [link,setLink] = useState('')

    const onChange = (event) => {
        setType(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const url = `http://www.boredapi.com/api/activity?type=${type}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setActivity(data.activity)
                setParticipants(data.participants)
                setLink(data.link)
                console.log(data.link)
            })
            .catch(e => console.log('error', e));
    }
    return (
        <div className="page">
            <form onSubmit={handleSubmit}>
                <select onChange={onChange}>
                    <option value="">Choose activity type</option>
                    <option value="recreational">Recreational</option>
                    <option value="education">Education</option>
                    <option value="relaxation">Relaxation</option>
                </select>                    
                <button>Search!</button>
                </form>
                <section className="section">
                    {activity !== ""
                        ? (
                            <div className="activity">
                                <h1>{activity}</h1>
                                <p>Participants: {participants}</p>
                                {link!== ""?link:""}
                            </div>
                        )
                        : ""}
                </section>
            </div>
    )
}

export default Main 