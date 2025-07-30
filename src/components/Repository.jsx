import axios from "axios";
import { useContext, useEffect, useState } from "react"
import RepoCard from "./RepoCard";
import { Input } from "./Input";
import Button from "./Button";
import { UserContext } from "./UserProvider";

export default function Repository() {
    const { user } = useContext(UserContext)
    const [repos, setRepos] = useState(user.repos)
    const [input, setInput] = useState('')
    function handleChange(e) {
        const value = e.target.value
        if (e.target.value == '') {
            setRepos(user.repos)
        }
        setInput(value)
    }
    function handleClick() {
        const result = repos.filter((repo) => (repo.full_name.toLowerCase().includes(input.toLowerCase())))
        setRepos(result)
    }
    return (
        <div className="flex w-full lg:w-2xl flex-col items-center gap-4 justify-center">
            <h1 className="text-4xl font-bold sm:text-4xl">Public Repository</h1>
            <div className='flex w-full lg:w-2xl gap-4 justify-between'>
                <Input onChange={handleChange} placeholder='Find a repository...' />
                <Button onClick={handleClick}>Find</Button>
            </div>
            <div className="grid w-full gap-4 sm:grid-cols-2">
                {repos.length > 0 ? repos.map((repo) => (
                    <RepoCard key={repo.id} url={repo.html_url} name={repo.name} language={repo.language} updatedAt={repo.updated_at} />
                )) : <h1 className="col-span-2 text-center font-bold text-2xl">No Results</h1>}
            </div>
        </div>
    )
}