import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../Global/colors';
import { parseISO, isValid, format } from 'date-fns';

const OrderItem = ({ order }) => {
    const { value } = order;

    // Verificar y formatear la cadena de fecha
    const formattedDate = tryFormatDate(value.updateAt);

    // Función para intentar formatear la cadena de fecha
    function tryFormatDate(dateString) {
        try {
            // Utilizar expresión regular para extraer componentes de la fecha
            const match = dateString.match(/(\d{2})\/(\d{2})\/(\d{4}), (\d{2}):(\d{2}):(\d{2})/);

            // Verificar si la expresión regular encontró componentes válidos
            if (match) {
                const [, day, month, year, hour, minute, second] = match;
                const parsedDate = new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`);

                // Verificar si la fecha es válida antes de formatearla
                if (isValid(parsedDate)) {
                    const formatted = format(parsedDate, 'dd/MM/yyyy, HH:mm:ss');
                    return formatted;
                } else {
                    console.error('Fecha inválida:', dateString);
                    return 'Fecha inválida';
                }
            } else {
                console.error('Formato de fecha no reconocido:', dateString);
                return 'Fecha inválida';
            }
        } catch (error) {
            console.error('Error al formatear la fecha:', error);
            return 'Fecha inválida';
        }
    }

    return (
        <View style={styles.container} >
            <View style={styles.containerCarts}>
                <Text style={styles.text}>Date: {formattedDate}</Text>
                <Text style={styles.text}>Total: ${value.total} </Text>
                <Feather name='search' size={25} color="white" />
            </View>
        </View>
    );
};

export default OrderItem;

const styles = StyleSheet.create({
    container: {
        width: "90%",
        flexDirection: "row",
        gap: 10,
        justifyContent: "space-between",
        margin: 10,
        padding: 10,
        
    },
    containerCarts: {
        backgroundColor: colors.blue,
        width: "100%",
        padding: 13,
        gap: 10,
        borderRadius: 20,
        
    },
    text: {
        fontFamily: "Raleway-Thin",
        fontSize: 16,
        color: "white"
    }
});
