import {useEffect} from 'react'

export default function Touca({stateChangeColor, ...props}: { stateChangeColor: any, props: any }) {
    useEffect(() => {
        // stateChangeColor('#edf4e6')
    })

    return (
        <>
            <h1 className="text-3xl">Touca</h1>
        </>
    )
}
