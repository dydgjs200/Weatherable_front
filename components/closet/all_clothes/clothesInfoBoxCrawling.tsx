'use client';

import styles from '../../../styles/closet/addclothes.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ClothesInfoBoxCrawling(data: any) {
  // console.log(index);
  // console.log(data.data);

  const { brand, id, image_path, productName } = data.data;

  const liked = () => {
    console.log('좋아요!');
  };

  const router = useRouter();
  const onClick = () => {
    router.push(`/closet/clothesInfo/${id}`);
  };
  return (
    <div className={styles.infoSmallBox}>
      <Link href={`/closet/clothesInfo/${id}`}>
        <div onClick={onClick}>
          <span className={styles.title}>{productName}</span>
          <button onClick={liked}>
            <span className="material-symbols-outlined">favorite</span>
          </button>
        </div>
        <img src={image_path} alt="" />
      </Link>
    </div>
  );
}
