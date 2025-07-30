

export default function RepoCard({ url, name, language, updatedAt }) {
  return (
    <div className="px-3 py-2 flex flex-col gap-4  w-full border rounded-lg">
      <a className="link" target="_blank" href={url}>{name}</a>
      {language ? <p className="text-sm text-gray-400">&#9679; {language}</p> : <br />}
      <p className="text-sm text-gray-400">{new Date(updatedAt.toString()).toDateString()}</p>
    </div>
  )
}
