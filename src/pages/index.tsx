import Head from 'next/head'
import Link from 'next/link'
import {useEffect} from 'react'

export default function Home({stateChangeColor, ...props}: { stateChangeColor: any, props: any }) {
    useEffect(() => {
        stateChangeColor('#fbf4ea')
    })

    return (
        <>
            <h1 className="text-3xl">Página Home</h1>
            <p><Link href="/cachecol">Cachecol</Link></p>
            <p><Link href="/touca">Touca</Link></p>
            <p><Link href="/meia">Meia</Link></p>
        </>
    )
}
