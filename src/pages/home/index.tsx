import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { useAuth } from "../../hooks/useAuth";

export default function Home(){
    const { user } = useAuth();
    return(
        <h1>Hello word!{user.email}</h1>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { ['auth']: token } = parseCookies(ctx);

    if (!token) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    return {
        props: {}
    }
}