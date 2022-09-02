import Link from "next/link";
import Layout from "../components/layout";

export default function Faq() {
    return (
        <Layout title="FAQ">
            <div>
                <h2>FAQ</h2> 
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscin ?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sed consequuntur a tempora quaerat? Suscipit et impedit placeat autem, reiciendis similique laudantium obcaecati quos cupiditate molestias labore ex aspernatur! Ratione!</p>

                <h3>Lorem ipsum dolor sit amet, consectetur adipiscin ?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sed consequuntur a tempora quaerat? Suscipit et impedit placeat autem, reiciendis similique laudantium obcaecati quos cupiditate molestias labore ex aspernatur! Ratione!</p>

                <h3>Lorem ipsum dolor sit amet, consectetur adipiscin ?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sed consequuntur a tempora quaerat? Suscipit et impedit placeat autem, reiciendis similique laudantium obcaecati quos cupiditate molestias labore ex aspernatur! Ratione!</p>
                <hr />
                <Link href="/">Volver al Home</Link>
            </div>
        </Layout>
        
    );
}