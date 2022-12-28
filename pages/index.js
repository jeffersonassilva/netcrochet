import Link from 'next/link';

function Home() {
    return (<div>
        <h1>Home</h1>
        <p><Link href="/sobre">Sobre</Link></p>
        <p><Link href="/tempo">Tempo</Link></p>
    </div>)
}

export default Home
