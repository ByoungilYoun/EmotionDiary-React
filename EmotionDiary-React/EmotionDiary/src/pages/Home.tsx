import { useSearchParams } from "react-router-dom"; // query parameter 를 가져오는 hook

const Home = () => {
    const [params, setParams] = useSearchParams();
    console.log(params.get("value"));

    return (
        <div>Home</div>
    )
}

export default Home