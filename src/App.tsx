import SvgIcon from '@/components/SvgIcon.tsx'
import React from 'react'

const App: React.FC = () => {
    return (
        <>
            <h1>svg 测试</h1>
            <SvgIcon
                name='phone'
                color='red'
                width='20px'
                height='30px'
                background-color='yellow'
            />
        </>
    )
}

export default App
