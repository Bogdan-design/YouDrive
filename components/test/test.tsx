import {useEffect, useState} from "react";

const USERS_URL = 'https://example.com/api/users';

export default function Table () {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(USERS_URL)

                if (!res.ok) {
                    throw new Error('Something went wrong')
                }

                const data = await res.json()

                setUsers(data)
            } catch (error) {
                console.error('Error:', error)
            }
        };

        fetchData()
    }, []);

    return (
        <div>
            <table className="table">
                <thead>

                </thead>

            </table>
            <section className="pagination">




            </section>
        </div>
    );
};