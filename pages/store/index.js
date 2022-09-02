import Layout from "../../components/layout"
import { getItems } from "../../services/itemService"
import style from "../../styles/product.module.css"
import Product from "../../components/product";

export default function index({items}){
    return (
        <Layout title="Store">
            <div>
                <h1>STORE</h1>

                <div className={style.items}>
                    {
                        items && items.map((item) => (
                            <Product item={item} key={item.id} ></Product>
                            ) 
                        )
                    }
                </div>
                
            </div>
        </Layout>
    );
}

export async function getStaticProps(){
    const res = await getItems();
    return {
        props: {
            items: res,
        }
    }
}