import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './style';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://avatars0.githubusercontent.com/u/37722587?s=460&u=e7ea3ee2ffb7bd182e2a0a23d5fa6a689e7733b0&v=4' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Arthur Andrade</Text>
                    <Text style={styles.subject}>Quimica</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                Explodindo coisas com experiências químicas.
                {'\n'}{'\n'}
                Apaixonando pelo mundo químico e estudante diário de suas consequências no mundo real
            </Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora {'   '}
                    <Text style={styles.priceValue}>R$ 200</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        <Image source={heartOutlineIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;