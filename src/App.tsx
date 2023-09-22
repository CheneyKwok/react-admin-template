import SvgIcon from '@/components/SvgIcon.tsx'
import React from 'react'
import request from '@/utils/request.ts'

const App: React.FC = () => {
    request({
        url: 'a/user/login',
        method: 'post',
        data: {
            username: 'admin',
            password: '111111',
        },
    }).then((res) => {
        console.log(res)
    })
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
