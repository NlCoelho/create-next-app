import { useRouter } from "next/router";

export default function Produtos() {
    const router = useRouter();
    const id = router.query.id;
    
    return <div>Id do produto: {id}</div>
    
}