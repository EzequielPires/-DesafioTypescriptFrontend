import Head from 'next/head';
import { Card } from '../components/Card';
import { Header } from '../components/Header';

import styles from '../styles/Home.module.scss';

export default function Home({ products }) {
  if (!products) {
    return <p>Loading</p>
  }
  return (
    <div>
      <Header />
      <div className={styles.list_products}>
        {products.map(item => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            brand={item.brand}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  let products;
  try {
    const res = await fetch('http://localhost:3000/products');
    products = await res.json();
  } catch {
    products = [];
  }


  return {
    props: {
      products
    }
  }
}
