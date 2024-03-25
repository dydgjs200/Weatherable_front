import styles from '../../../styles/closet/closet.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { likedCloth } from '../../../service/closetApiService';
import { useState } from 'react';

export default function ClothesInfoBox(data: any) {
  const [isLike, setIsLike] = useState(false);

  const { imagePath, id, productName, liked } = data.clothes;

  // like 데이터 보내기

  const likeBtn = async () => {
    const likedData = { id: id, liked: liked };
    console.log(likedData);
    const likeRes = await likedCloth(likedData);
    if (likeRes === 200) {
      setIsLike(!isLike);
    }
  };

  return (
    <div className={styles.infoSmallBox}>
      <div>
        <Link href={`/clothes/${id}`} className={styles.title}>
          <span>{productName}</span>
        </Link>
        <button onClick={likeBtn}>
          <span
            className="material-symbols-outlined"
            style={isLike ? { color: '#3c6aa3' } : { color: '#d3d3d3' }}
          >
            favorite
          </span>
        </button>
      </div>
      <Link href={`/clothes/${id}`}>
        <img src={imagePath} alt="" />
      </Link>
    </div>
  );
}
