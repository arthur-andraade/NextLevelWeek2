import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import styles from './style';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import api from '../../services/api';

function TeacherList() {

    const [teachers, setTeachers] = useState([]);
    const [isFilterVisible, setIsFiltersVisible] = useState(false);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFilterVisible);
    }

    async function handleFiltersSubmit() {
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });

        setIsFiltersVisible(false);
        setTeachers(response.data);
    }

    return (
        <View style={styles.container}>
            <PageHeader
                title="Proffys disponíveis"
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={20} color="#FFF"></Feather>
                    </BorderlessButton>
                )}
            >
                {
                    isFilterVisible && (
                        <View style={styles.searchForm}>
                            <Text style={styles.label}>Materia</Text>
                            <TextInput
                                placeholderTextColor="#c1bccc"
                                style={styles.input}
                                placeholder="Qual a matéria?"
                                value={subject}
                                onChangeText={text => setSubject(text)}
                            />

                            <View style={styles.inputGroup}>
                                <View style={styles.inputBlock}>
                                    <Text style={styles.label} >Dia da semana</Text>
                                    <TextInput
                                        placeholderTextColor="#c1bccc"
                                        style={styles.input}
                                        placeholder="Qual o dia ?"
                                        value={week_day}
                                        onChangeText={text => setWeekDay(text)}
                                    />
                                </View>
                                <View style={styles.inputBlock}>
                                    <Text style={styles.label} >Horário</Text>
                                    <TextInput
                                        placeholderTextColor="#c1bccc"
                                        style={styles.input}
                                        placeholder="Qual o horário ?"
                                        value={time}
                                        onChangeText={text => setTime(text)}
                                    />
                                </View>
                            </View>
                            <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
                                <Text style={styles.submitButtonText}>Filtrar</Text>
                            </RectButton>
                        </View>
                    )
                }
            </PageHeader>
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />
                })}
            </ScrollView>
        </View>
    )
}

export default TeacherList;