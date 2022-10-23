
const Userpage = ({users}) => {
  return (
    <div>
        <h1>Hello users</h1>
        {users.map((user) => (
            <div key={user.id}>{user.name}</div>
        ))}
    </div>
  )
}

export async function getServerSideProps(){
    try {
        const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        // console.log(users)
        return{
            props:{
                users
            }
        }
    } catch (error) {
      console.log(error)
       
    }
}

export default Userpage