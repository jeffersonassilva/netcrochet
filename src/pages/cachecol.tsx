import Head from 'next/head'
import Link from 'next/link'
import {useEffect} from 'react'

export default function Cachecol({stateChangeColor, ...props}: { stateChangeColor: any, props: any }) {
    useEffect(() => {
        stateChangeColor('#c6d0e7')
    })

    return (
        <>
            <h1 className="text-3xl">Cachecol</h1>
            <Link href="/">Home</Link>
        </>
    )
}
