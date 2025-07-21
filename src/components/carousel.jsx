import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const Comp1 = () => (
    <Carousel autoplay>
        <div>
            <h3 style={contentStyle}>Мы создаём современные веб-приложения с упором на дизайн и удобство.</h3>
        </div>
        <div>
            <h3 style={contentStyle}>Наша команда состоит из разработчиков, дизайнеров и энтузиастов своего дела.</h3>
        </div>
        <div>
            <h3 style={contentStyle}>Мы верим, что технологии должны быть простыми и доступными каждому.</h3>
        </div>
        <div>
            <h3 style={contentStyle}>Цель проекта — улучшить цифровой опыт пользователей через инновационные решения.</h3>
        </div>

    </Carousel>
);

export default Comp1;