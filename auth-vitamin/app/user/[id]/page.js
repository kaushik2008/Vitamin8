// app/user/[id]/page.js
export default async function UserProfile({ params }) {
  const { id } = await params;

  return (
    <main>
      <h1>User Profile: {id}</h1>
    </main>
  );
}