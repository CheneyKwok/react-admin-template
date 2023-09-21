interface SvgProps {
    name: string
    prefix?: string
    color?: string
    props?: any
}
const SvgIcon = ({
    name,
    prefix = 'icon',
    color = '#333',
    ...props
}: SvgProps) => {
    const symbolId = `#${prefix}-${name}`
    return (
        <>
            <svg {...props}>
                <use href={symbolId} fill={color} />
            </svg>
        </>
    )
}

export default SvgIcon
