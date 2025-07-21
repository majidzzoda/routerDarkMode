import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
const UsersById = () => {
    let api = "https://680167ea81c7e9fbcc427768.mockapi.io/tableUsers";
    const [data, setData] = useState({});
    const { id } = useParams();
    async function get() {
        try {
            const { data } = await axios.get(`${api}/${id}`);
            setData(data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        get()
    }, [])
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
            <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 max-w-md w-full">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{data.name}</h1>
                <h1 className="text-lg text-gray-700 dark:text-gray-300 mb-2">{data.bio}</h1>
                <h1 className="text-lg text-gray-700 dark:text-gray-300 mb-2">Возраст: {data.age}</h1>
                <h1 className="text-lg text-blue-600 dark:text-blue-400 break-all">{data.email}</h1>
            </div>
        </div>

    )
}

export default UsersById