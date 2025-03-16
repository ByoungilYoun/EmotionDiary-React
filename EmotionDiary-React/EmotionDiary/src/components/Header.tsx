import React from 'react'

interface HeaderProps {
    title: string,
    leftChild: React.ReactElement,
    rightChild: React.ReactElement
}

const Header = ({ title, leftChild, rightChild }: HeaderProps) => {
    // return <header className="">Header</header>
    return (
        <header className="flex items-center justify-between py-4 px-0 border-b border-solid border-gray-200">
            <div className="flex justify-start w-1/4">{leftChild}</div>
            <div className="flex w-1/2 text-xl justify-center">{title}</div>
            <div className="flex justify-end w-1/4">{rightChild}</div>
        </header>
    )
}

export default Header;
