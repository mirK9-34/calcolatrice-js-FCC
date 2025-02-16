import { useState, useEffect } from 'react'
export const RandomUser = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        // faccio qualcosa
    fetch("https://randomuser.me/api/")
            .then((res) => res.json())
            .then((data) => setUser(data.results[0]))
            .catch((err) => console.error(err));
    }, []);
    return (
        <div>
            <h2>Utente Casuale</h2>
            {
                user ?
                    <>
                        <p>FirstName: <strong>{user.name.first}</strong></p>
                        <p>lastName: <strong>{user.name.last}</strong></p>
                        <img src={user.picture.large} alt={user.name.title}/>
                        <p>Location: Number: {user.location.street.number}, {user.location.street.name}
                            <i><div style={{textDecoration: "underline"}}>{user.email}</div></i>
                        </p>
                    </>
                :
                    <p>Caricamento: </p>}
        </div>
    );
}