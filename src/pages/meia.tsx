import Head from 'next/head'
import Link from 'next/link'
import {useEffect} from 'react'

export default function Meia({stateChangeColor, ...props}: { stateChangeColor: any, props: any }) {
    useEffect(() => {
        stateChangeColor('#e6b7ca')
    })

    return (
        <>
            <h1 className="text-3xl">Meia</h1>
            <Link href="/">Home</Link>
        </>
    )
}
