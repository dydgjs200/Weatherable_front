import styles from '../../../styles/closet/closet.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { likedCloth } from '../../../service/closetApiService';
import { useState } from 'react';

export default function ClothesInfoBox(data: any) {
  const [isLike, setIsLike] = useState(false);

  const liked = async () => {
    setIsLike(!isLike);

    try {
      const clothLike = await likedCloth(isLike);
    } catch (error) {
      console.log(error, '좋아요 오류');
    }
  };

  const { imagePath, id, productName } = data.clothes;

  return (
    <div className={styles.infoSmallBox}>
      <div>
        <Link href={`/clothes/${id}`} className={styles.title}>
          <span>{productName}</span>
        </Link>
        <button onClick={liked}>
          <span className="material-symbols-outlined">favorite</span>
        </button>
      </div>
      <Link href={`/clothes/${id}`}>
        <img src={imagePath} alt="" />
      </Link>
    </div>
  );
}
