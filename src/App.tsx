import SvgIcon from '@/components/SvgIcon.tsx'
import React from 'react'

const App: React.FC = () => {
    return (
        <>
            <h1>svg 测试</h1>
            <SvgIcon
                name='phone'
                color='red'
                style={{
                    width: '20px',
                    height: '30px',
                    fontSize: '50px',
                    backgroundColor: 'yellow',
                }}
            />
        </>
    )
}

export default App
