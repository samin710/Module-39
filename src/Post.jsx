export default function Post({post}){
    return (
        <div className="card">
            <h2>Post No: {post.id}</h2>
            <h3>Title: {post.title}</h3>
            <p>Body: {post.body}</p>
        </div>
    )
}