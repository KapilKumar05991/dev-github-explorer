import { useContext, useEffect, useState } from "react"
import { UserContext } from "./UserProvider"

export default function Profile() {
    const { user } = useContext(UserContext)
    return (
        <div className="flex justify-between items-center w-full lg:w-2xl">
            {/* Profile Image */}
            <div>
                <img className="rounded-full size-32 sm:size-56" src={user.info.avatar_url || "/"} alt="" />
            </div>
            <div className="w-1/2">
                <h1 className="text-3xl font-bold sm:text-4xl">{user.info.name}</h1>
                <a className="link" href={user.info.html_url} target="_blank" rel="noopener noreferrer">
                    {user.info.login}
                </a>
                <p>{user.info.bio && 'bio - ' + user.info.bio}</p>
                <p>{user.info.public_repos} public repos</p>
                <p>{user.info.public_gists} public gists</p>
                <p>{user.info.followers} followers &nbsp; | &nbsp; {user.info.following} following</p>
                {
                    user.info.twitter_username &&
                    <p>twitter -  <a className="link" href={`https://x.com/${user.info.twitter_username}`}>{user.info.twitter_username}</a></p>
                }
                <p>{user.info.location && 'location - ' + user.info.location}</p>
            </div>
        </div>
    )
}