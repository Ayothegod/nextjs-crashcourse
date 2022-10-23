
const Userprofilepage = (props) => {
  return (
    <div>
        {props.col &&  (
            <>
                <div>{props.user.id}</div>
                <div>{props.user.name}</div>
                <div>{props.user.username}</div>
                <div>{props.user.email}</div>
            </>
        ) }
    </div>
  )
}

export async function getServerSideProps(context){
    const {userid} = context.params
    console.log(context.params)
    try {
    const user = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
    .then(res => res.json())
        return{
            props:{user}
        }
    } catch (error) {
      console.log(error);
      const col = await res.json()  
      return{
        props:{col}
      }
    }
}

export default Userprofilepage