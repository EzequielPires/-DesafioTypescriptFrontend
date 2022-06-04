import Image from "next/image";
import styles from "./styles.module.scss";

interface Props {
    id: number;
    name: string;
    price: string;
    brand: string;
    image: string;
}

export function Card({ id, name, price, brand, image }: Props) {
    return (
        <div className={styles.card}>
            <div className={styles.card_header}>
                <Image src={image} alt={`Image ${id}`} width={200} height={124} />
            </div>
            <div className={styles.card_body}>
                <span className={styles.name}>{name}</span>
                <span className={styles.brand}>{brand}</span>
                <span className={styles.price}>R$ {price}</span>
            </div>
        </div>
    )
}