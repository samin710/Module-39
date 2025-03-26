export default function Friend({friend}) {
  return (
    <div className="card">
      <h3>Name: {friend.name}</h3>
      <p>Email: {friend.email}</p>
    </div>
  );
}
