import Head from 'next/head'
import Link from 'next/link'
import {useEffect} from 'react'

export default function Touca({stateChangeColor, ...props}: { stateChangeColor: any, props: any }) {
    useEffect(() => {
        stateChangeColor('#cbd9bc')
    })

    return (
        <>
            <h1 className="text-3xl">Touca</h1>
            <Link href="/">Home</Link>
        </>
    )
}
