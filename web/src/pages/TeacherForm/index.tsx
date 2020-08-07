import React from 'react';
import PageHeader from '../../components/PageHeader';

import './style.css';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrivel que você quer dar aulas!"
                description="O primeiro passo é preencher esse formulário de inscrição"
            />
            <main>

                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />
                    <Textarea name="bio" label="Biografia" />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Select
                        firstOption="Seleciona uma máteria"
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: "Artes", label: "Artes" },
                            { value: "Matemática", label: "Matemática" },
                            { value: "Quimica", label: "Quimica" },
                            { value: "Geografia", label: "Geografia" }
                        ]}
                    />
                    <Input name="cost" label="Custo da aula por hora" />
                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button">
                            + Novo horário
                        </button>
                    </legend>

                    <div className="schedule-item">
                        <Select
                            firstOption="Selecione um dia"
                            name="week_day"
                            label="Dia da semana"
                            options={[
                                { value: "0", label: "Domingo" },
                                { value: "1", label: "Segunda-feira" },
                                { value: "2", label: "Terça-feira" },
                                { value: "3", label: "Quarta-feira" },
                                { value: "4", label: "Quint-feira" },
                                { value: "5", label: "Sexta-feira" },
                                { value: "5", label: "Sabado" },
                            ]}
                        />
                        <Input name="from" label="Das" type="time" />
                        <Input name="to" label="Até" type="time" />
                    </div>
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;