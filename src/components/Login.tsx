import React, { useState } from 'react'

function Login({ passUser }) {

    const [choice, setChoice] = useState('Player1');

    const handleChange = (e) => {
        setChoice(e.target.value);
    }

    return (
        <form onSubmit={() => passUser(choice)}>
            <select name="Player" id="" onChange={e => handleChange(e)}>
                <option value="Player1">Player1</option>
                <option value="Player2">Player2</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Login
