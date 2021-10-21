import React from "react";
import { useHistory } from 'react-router-dom'

export const AboutPages = () => {
    const history = useHistory()

    return (
        <>
            <h1>Страница информации</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ab alias aliquam aut facere harum maxime, veritatis!
                Ea nihil placeat quidem!
            </p>
            <button className='btn' onClick={() => history.push('/')} >Обратно к списку дел</button>
        </>
    )
}