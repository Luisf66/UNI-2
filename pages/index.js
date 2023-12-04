import { Receita1_implementacao } from './Receita1.js';
import { Receita2_implementacao } from './Receita2.js';
import { Receita3_implementacao } from './Receita3.js';
import { Receita4_implementacao } from './Receita4.js';
import { Receita6_implementacao } from './Receita6.js';
import { Receita9_implementacao } from './[id].js';

function Principal() {
    const estiloTitulo = {
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif' // Substitua pela fonte desejada
    };

    const estiloLista = {
        listStyleType: 'none'
    };

    const estiloPrincipal = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
    };

    return (
        <div style={estiloPrincipal}>
            <h1 style={estiloTitulo}>Links das receitas</h1>
            <ul style={estiloLista}>
                <li><a href="/Receita1">Ver Receita 1</a></li>
                <li><a href="/Receita2">Ver Receita 2</a></li>
                <li><a href="/Receita3">Ver Receita 3</a></li>
                <li><a href="/Receita4">Ver Receita 4</a></li>
                <li>Receita 5 Desabilitada (ERROR)</li>
                <li><a href="/Receita6">Ver Receita 6</a></li>
                <li><a href="/tt0095801">Ver Receita 9</a></li>
            </ul>
        </div>
    );
}

export default Principal;