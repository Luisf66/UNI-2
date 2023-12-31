import useSWR from 'swr'
export default function Receita4_implementacao() {
    const { data, error } = useSWR(`https://www.omdbapi.com/?apikey=fdb5b2fe&s=bagdad`, fetcher)
    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>
    return (
        <div>
            {data.Search.map((m) => <div>{m.Title} --- {m.Year}</div>)}
        </div>
    )
}

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}