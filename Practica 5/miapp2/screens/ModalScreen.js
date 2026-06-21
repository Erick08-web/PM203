import { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Animated, Modal, Pressable, StyleSheet, Text, View } from "react-native";

export default function ModalScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [sheetVisible, setSheetVisible] = useState(false);
    const [selectedMode, setSelectedMode] = useState('Presencial');
    const [reservationConfirmed, setReservationConfirmed] = useState(false);

    function selectedMode(mode) {
        setSelectedMode(mode);
        setReservationConfirmed(false);
        setSheetVisible(false);
    }

    return (
        <View style={styles.container}>
            <Text style={Styles.title}>Reserva de clase</Text>
            <Text style={Styles.subtitle}>React Native: Modal y Bottom Sheet</Text>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Clase practica</Text>
                <Text style={Styles.cardText}>Duracion de 40 min</Text>
                <Text style={Styles.cardText}>Modalidad: {selectedMode}</Text>
                <Text style={Styles.cardText}> Estado: {reservationConfirmed ? 'Confirmada' : 'Pendiente'}</Text>
            </View>

            <Pressable style={styles.secondaryButton} onPress={() => setSheetVisable = (true)}>
                <Text style={styles.secondaryButtonText}>Ejelir Modalidad</Text>
            </Pressable>


            <Pressable style={styles.secondaryButton} onPress={() => setSheetVisible(true)}>
                <Text style={styles.secondaryButtonText}>Elegir modalidad</Text>
            </Pressable>

            <Pressable style={styles.PrimaryButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.primaryButtonText}>Confirmar reserva</Text>
            </Pressable>

            <Modal
                visible={modalVisible}
                animationType="fade"
                transparent
                statusBarTranslucent
                onShow={() => console.log('Modal de confirmacion abierto')}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.Overlay}>
                    <View style={styles.modalCard}>
                        <Text style={styles.modalTitle}>Confirmar reserva</Text>
                        <Text style={styles.modalText}>Deseas reversar la clase en modalidad</Text>

                        <View style={styles.actionsRow}>
                            <Pressable
                                style={[styles.actionButton, styles.cancelButton]}
                                onPress={() => setModalVisible(false)}>

                                <Text style={stylescancelButtonText}>Cancelar</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.actionButton, styles.confirmButton]}
                                onPress={() => {
                                    setReservationConfirmed(true);
                                    setModalVisible(false);
                                }}>

                                <Text style={styles.confirmButtonText}>Confirmar</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>


            <ButtonSheet visible={sheetVisible} onClose={() => setSheetVisable(false)}
                title="Elegir Modalidad"
                height={330}>

                <Pressable style={style.optionButtom} onPress={() => selectedMode('Presencial')}>
                    <Text style={styles.optionTitle}>Presencial</Text>
                    <Text style={styles.optionText}>Asistir al salon</Text>
                </Pressable>

                <Pressable style={style.optionButtom} onPress={() => selectedMode('En linea')}>
                    <Text style={styles.optionTitle}>En linea</Text>
                    <Text style={styles.optionText}>Recibir link del Meet</Text>
                </Pressable>

                <Pressable style={style.optionButtom} onPress={() => selectedMode('Grabacion')}>
                    <Text style={styles.optionTitle}>Grabación</Text>
                    <Text style={styles.optionText}>Recibir video de la clase</Text>

                </Pressable>


            </ButtonSheet>




        </View>
    )
}
function BottomSheet({ visible, onClose, title, height = 320, closeOnBackdropPress = true,
    children,
}) {
    const translateY = useRef(new Animated.Value(height)).current;

    useEffect(() => {
        Animated.timing(translateY, {
            toValue: visible ? 0 : height,
            duration: visible ? 250 : 200,
            useNativeDriver: true,
        }).start();
    }, [height, translateY, visible]);

    return (
        <Modal
            vible={visible} transparent animationType="none" statusBarTranslucent
            onRequestClose={onClose}
        >

            <View style={styles.sheetOverlay}>
                <Pressable style={sheet.closeOnBackdrop} onPress={closeOnBackdropPress ? onClose :
                    undefined
                } />

                <Animated.View style={[styles.sheetCotainer, { height, transform: [{ translateY }] },
                ]}
                >
                    <ViewStyle style={styles.sheetHandle} />
                    <Text style={styles.sheetTitle}>{title}</Text>
                    {children}
                </Animated.View>
            </View>
        </Modal>
    )


}






















// /* Zona1: importaciones de componentes de archivos*/
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';


// /* Zona2: Main - hogar de los componentes*/


// export default function ModalScreen() {
//     return (
//         <View style={styles.container}>

//             <Text> Aqui va la practica de Fernando, Alan y Erick </Text>
//             <StatusBar style="auto" />

//         </View>
//     );
// }


// /* Zona3: Estilos y posicionamiento */
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'flex-start',
//         justifyContent: 'center',
//         flexDirection: 'column'
//     }
// });