import {useEffect} from 'react'

export default function Home({stateChangeColor, ...props}: { stateChangeColor: any, props: any }) {
    useEffect(() => {
        // stateChangeColor('#fbf4ea')
    })

    return (
        <>
            <h1 className="text-3xl">Cachecol</h1>
        </>
    )
}
