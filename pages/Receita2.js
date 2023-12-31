export default function Principal() {
    return (
        <div>
            <h1>Nova Página</h1>
            <MariaPrea />
            <Tabela />
            <Imagem />
        </div>
    )
}

export function MariaPrea() {
    return (
        <h2>Morreu Maria Preá...</h2>
    )
}

export function Tabela() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Titulo de teste 1</th>
                    <th>Titulo de teste 2</th>
                    <th>Titulo de teste 3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Conteudo de teste 1</td>
                    <td>Conteudo de teste 2</td>
                    <td>Conteudo de teste 3</td>
                </tr>
                <tr>
                    <td>Conteudo de teste 4</td>
                    <td>Conteudo de teste 5</td>
                    <td>Conteudo de teste 6</td>
                </tr>
                <tr>
                    <td>Conteudo de teste 7</td>
                    <td>Conteudo de teste 8</td>
                    <td>Conteudo de teste 9</td>
                </tr>
            </tbody>
        </table>
    )
}

export function Imagem () {
    return (
        <div>
            <p>Teste de Imagem importada</p>
            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--gjboKZlh--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1crd9guwakabciqtt6e3.png" alt="Node JS"></img>
        </div>
    )
}