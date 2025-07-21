import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
const Users = () => {
    let api = "https://680167ea81c7e9fbcc427768.mockapi.io/tableUsers";
    const [data, setData] = useState([])
    async function get() {
        try {
            const { data } = await axios.get(api);
            setData(data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        get()
    }, [])
    return (
        <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
            <div className="grid gap-4 max-w-2xl mx-auto">
                {data.map((e) => (
                    <div
                        key={e.id}
                        className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 transition-transform transform hover:scale-[1.02] hover:shadow-lg"
                    >
                        <Link
                            to={`/users/${e.id}`}
                            className="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            {e.name}
                        </Link>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Users