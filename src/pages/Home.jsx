import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="flex items-center justify-center min-h-screen px-[20px] bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl text-center">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Добро пожаловать!</h1>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Это домашняя страница вашего приложения. Здесь можно разместить вводный текст, инструкции или ссылки.
                </p>
                <Link to={"/users"}>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">Перейти</button>
                </Link>
            </div>
        </div>
    )
}

export default Home
