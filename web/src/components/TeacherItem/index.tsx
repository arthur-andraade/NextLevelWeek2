import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/37722587?s=460&u=e7ea3ee2ffb7bd182e2a0a23d5fa6a689e7733b0&v=4" alt="Foto do professor" />
                <div>
                    <strong>Arthur Andrade</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiasta em explodir coisas e criar.
                <br /><br />
                Apaixonado por explodir coisas
            </p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;