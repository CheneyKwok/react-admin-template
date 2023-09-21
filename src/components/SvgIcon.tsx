import { CSSProperties } from 'react'

interface SvgProps {
    name: string
    prefix?: string
    color?: string
    width?: string
    height?: string
    props?: object
}
const SvgIcon = ({
    name,
    prefix = 'icon',
    color = '#333',
    width,
    height,
    ...props
}: SvgProps) => {
    const symbolId: string = `#${prefix}-${name}`
    const style: CSSProperties | undefined = {
        width,
        height,
        ...props,
    }
    return (
        <>
            <svg {...props} style={style}>
                <use href={symbolId} fill={color} />
            </svg>
        </>
    )
}

export default SvgIcon
