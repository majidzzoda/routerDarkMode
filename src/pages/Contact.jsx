import React from 'react'

const Contact = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
            <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 max-w-xl w-full text-center">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Свяжитесь с нами</h1>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Если у вас есть вопросы, предложения или обратная связь — мы всегда рады общению!
                </p>
                <div className="space-y-2">
                    <p className="text-blue-600 dark:text-blue-400">Email: support@example.com</p>
                    <p className="text-blue-600 dark:text-blue-400">Телефон: +992 900 00 00 00</p>
                    <p className="text-blue-600 dark:text-blue-400">Адрес: г. Душанбе, ул. Примерная, 123</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
