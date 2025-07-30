import { useContext } from "react"
import ActiviyCard from "./ActiviyCard"
import { UserContext } from "./UserProvider"

const Activity = () => {
    const { user } = useContext(UserContext)
    return (
        <div className="flex w-full lg:w-2xl flex-col items-center gap-4 justify-center">
            <h1 className="text-4xl font-bold sm:text-4xl">Recent Activity</h1>
            <div className="flex flex-col w-full gap-4 ">
                {
                    user.events.length > 0
                        ? user.events.map((eve) => (
                            <ActiviyCard key={eve.id} type={eve.type} name={eve.repo.name} createdAt={eve.created_at} description={eve.payload.description || eve.payload.commits == undefined ? '' : eve.payload.commits[0].message} />
                        ))
                        : <h1 className="col-span-2 text-center font-bold text-2xl">No Results</h1>
                }
            </div>
        </div>
    )
}

export default Activity