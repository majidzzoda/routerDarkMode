import React from 'react'
import Comp1 from '../components/carousel'

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-2xl text-center">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">О нас</h1>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Добро пожаловать на страницу "О нас". Здесь можно рассказать о проекте, команде, целях и планах.
                </p>
                <Comp1 />
            </div>
        </div>
    )
}

export default About
