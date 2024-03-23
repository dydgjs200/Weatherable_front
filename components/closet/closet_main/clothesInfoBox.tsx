'use client';

import styles from '../../../styles/closet/closet.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ClothesInfoBox(data: any) {
  const liked = () => {
    console.log('좋아요!');
  };

  // console.log(data);

  const { imagePath, id, productName } = data.clothes;

  const router = useRouter();
  const onClick = () => {
    router.push(`/clothes/${id}`);
  };

  return (
    <div className={styles.infoSmallBox} onClick={onClick}>
      <Link href={`/clothes/${id}`}>
        <div>
          <span className={styles.title}>{productName}</span>
          <button onClick={liked}>
            <span className="material-symbols-outlined">favorite</span>
          </button>
        </div>
        <img src={imagePath} alt="" />
      </Link>
    </div>
  );
}
