import styles from '../../../../../styles/closet/closet.module.scss';
import clothStyles from '../../../../../styles/closet/clothes.module.scss';
import Image from 'next/image';

export default function Clothes() {
  return (
    <div className={styles.container}>
      <div className={clothStyles.pNameContainer}>
        IAB 10주년 반팔 티셔츠 (Black)
      </div>
      <div className={clothStyles.imgContainer}>
        {/* <Image src={} alt="로고" />; */}
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png"
          alt=""
        />
      </div>
      <div className={clothStyles.infoContainer}>
        <div>
          <span className={clothStyles.title}>브랜드</span>
          <span className={clothStyles.desc}>IAB Studio</span>
        </div>
        <div>
          <span className={clothStyles.title}>카테고리</span>
          <span className={clothStyles.desc}>상의 </span>
          <span>-</span>
          <span className={clothStyles.desc}>반팔 티셔츠</span>
        </div>
        <div>
          <span className={clothStyles.title}>사이즈</span>
          <span className={clothStyles.desc}>M</span>
        </div>
        <div>
          <span className={clothStyles.title}>계절</span>
          <span className={clothStyles.desc}>여름</span>
        </div>
        <div>
          <span className={clothStyles.title}>두께</span>
          <span className={clothStyles.desc}>얇음</span>
        </div>
        <div>
          <span className={clothStyles.title}>스타일</span>
          <span className={clothStyles.desc}>캐주얼</span>
        </div>
        <div>
          <span className={clothStyles.title}>구매가격</span>
          <span className={clothStyles.desc}>10000</span>
        </div>
      </div>
      <div className={clothStyles.btnContainer}>
        <button>수정하기</button>
        <button>삭제하기</button>
      </div>
    </div>
  );
}
