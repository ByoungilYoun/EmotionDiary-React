
interface ButtonProps {
    text: string,
    type: string,
    onClick: () => void
}

const Button = ({ text, type, onClick }: ButtonProps) => {
    const className = `bg-gray-200 text-black cursor-pointer border-0 rounded-md px-5 py-2.5 text-base whitespace-nowrap
        ${type === 'POSITIVE' ? 'bg-green-500 text-white' : ''}
        ${type === 'NEGATIVE' ? 'bg-red-500 text-black' : ''}`;

    return<button onClick={onClick} className={className}>{text}</button>
}

export default Button