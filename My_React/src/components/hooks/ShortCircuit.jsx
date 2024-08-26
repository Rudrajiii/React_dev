import { useState } from 'react'
import './circuit.css'
export const ShortCircuit = () => {
    const [isLoggedIn , UpdateLogin] = useState(true);
    const [user , SetUser] = useState('');
    return (
            <section className="wrapper">
            <h1 className="heading">
                Welcome to Short Circuit Example
            </h1>

            { isLoggedIn && <p>You are logged in!!</p> }

            {user ? <h4>😃</h4> : <h4>🥺</h4>}

            {user ? <h3>Hellow {user}</h3> : <h3>You are not logged in!!</h3>}

            <div className="line-by-line">
                <button onClick={() => UpdateLogin(!isLoggedIn)}>Toggle Login State</button>
                <button onClick={() => SetUser("Rudra")}>Set User</button>
                <button onClick={() => SetUser("")}>Clear User</button>
            </div>
        </section>
    )
}
