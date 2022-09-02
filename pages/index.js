import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Link from 'next/link' 
import { getLatestItems } from '../services/itemService'
import styleProduct from '../styles/product.module.css'
import Product from "../components/product"

export default function Home({items}) {
  return ( 
      <Layout title="Bienvenido">

            <div className={styles.banner}>
                <div className={styles.bannerBackground}>
                    <div className={styles.bannerInfo}>
                        <h2>Shop Summer 2022 Collection</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                        </p>
                    </div>
                </div>
            </div>

            <h3>Latest Products</h3>
            <div className={styleProduct.items}>
                { 
                    items && items.map((item) => (
                        <Product item={item} key={item.id} showAs="item"></Product>
                        ) 
                    )
                }
            </div>  
      </Layout> 
  )
}

export async function getStaticProps(){
    const res = await getLatestItems(); 

    return {
        props: {
            items: res
        }
    }
}