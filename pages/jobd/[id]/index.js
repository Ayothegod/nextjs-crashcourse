import { useRouter } from "next/router"


const IndivitualJobs = (props) => {
const router = useRouter()
  console.log(router.query.id);
  console.log(props)
  return <div> jkcjkcdjk is who</div>
  
}

export async function getServerSideProps(context){
    console.log(context)
    return{
        props:{
            job:{
                id:'123',
                title:'Full stack engineerring',
            },
        },
    }
}

export default IndivitualJobs