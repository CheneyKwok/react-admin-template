import { CSSProperties } from 'react'

interface SvgProps {
    name: string
    prefix?: string
    color?: string
    style?: CSSProperties
    [propName: string]: string | undefined | object
}

const SvgIcon = ({
    name,
    prefix = 'icon',
    color = '#333',
    style,
    ...props
}: SvgProps) => {
    const symbolId: string = `#${prefix}-${name}`
    return (
        <>
            <svg {...props} style={style}>
                <use href={symbolId} fill={color} />
            </svg>
        </>
    )
}

export default SvgIcon
