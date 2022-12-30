import {Html, Head, Main, NextScript} from 'next/document'
import {useState} from 'react'

export default function Document() {
    const [bgColor, setBgColor] = useState('#fbf4ea')
    return (
        <Html lang="pt-BR">
            <Head/>
            <body>
                <main className='flex items-center relative min-h-screen'>
                    <Main stateChangeColor={setBgColor}/>
                    <NextScript/>
                </main>
            </body>
        </Html>
    )
}
