import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Home(){
    const { user } = useContext(AuthContext);
    return(
        <h1>Hello word!{user.email}</h1>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { ['auth']: token } = parseCookies(ctx);
    console.log('token:', token);

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