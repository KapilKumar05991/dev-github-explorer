import React from 'react'

const ActiviyCard = ({ type, name, description, createdAt }) => {
    return (
        <div className="px-3 py-2 flex flex-col gap-4  w-full border rounded-lg">
            <p>{type} <a className="link" target='_blank' href={`https://github.com/${name}`}>{name}</a></p>
            <p className="text-sm text-gray-400">{description}</p>
            <p className="text-sm text-gray-400">{new Date(createdAt.toString()).toDateString()}</p>
        </div>
    )
}

export default ActiviyCard