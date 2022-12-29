import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <h1 className="text-3xl">
                Hello world!
            </h1>
            <Link href="/contato">
                Contato
            </Link>
        </div>
    )
}
