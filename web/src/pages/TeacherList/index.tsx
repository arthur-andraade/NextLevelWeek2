import React from 'react';

import PageHeader from '../../components/PageHeader';

import './style.css'
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers">
                    <Select
                        firstOption="Selecione uma máteria"
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: "Artes", label: "Artes" },
                            { value: "Matemática", label: "Matemática" },
                            { value: "Quimica", label: "Quimica" },
                            { value: "Geografia", label: "Geografia" }
                        ]}
                    />
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
                            { value: "6", label: "Sabado" },
                        ]}
                    />
                    <Input name="time" label="Hora" type="time" />
                </form>
            </PageHeader>
            <main>
                <TeacherItem />
            </main>
        </div>
    );
}

export default TeacherList;