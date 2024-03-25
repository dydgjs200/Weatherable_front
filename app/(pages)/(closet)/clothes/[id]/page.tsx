'use client';

import { useState, useEffect } from 'react';
import styles from '../../../../../styles/closet/closet.module.scss';
import clothStyles from '../../../../../styles/closet/clothes.module.scss';
import Image from 'next/image';
import {
  deleteCloth,
  getMyClosetById,
  modifyCloth,
} from '../../../../../service/closetApiService';
import { useRouter } from 'next/navigation';
import { isIP } from 'net';

interface clothes {
  imagePath: string;
  productName: string;
  brand: string;
  majorCategory: string;
  middleCategory: string;
  size: string;
  season: string;
  thickness: string;
  style: string;
  price: string;
}

export default function Clothes({ params: { id } }) {
  const [clothes, setClothes] = useState<clothes>({
    imagePath: '',
    productName: '',
    brand: '',
    majorCategory: '',
    middleCategory: '',
    size: '',
    season: '',
    thickness: '',
    style: '',
    price: '',
  });

  const [isSize, setIsSize] = useState('');
  const [isName, setIsName] = useState('');
  const [isPrice, setIsPrice] = useState('');

  // id 기반 옷 정보 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const crawlingClothes = await getMyClosetById(id);
        setClothes(crawlingClothes);
        setIsSize(crawlingClothes.size);
        setIsName(crawlingClothes.productName);
        setIsPrice(crawlingClothes.price);
      } catch (error) {
        console.log('내 옷장 상세 정보가져오기 실패: ', error);
      }
    };
    fetchData();
  }, []);

  const {
    imagePath,
    productName,
    brand,
    majorCategory,
    middleCategory,
    size,
    season,
    thickness,
    style,
    price,
  } = clothes;

  // console.log(clothes);

  const router = useRouter();

  const deleteClothes = async () => {
    try {
      const result = await deleteCloth(id);
      alert('삭제가 완료되었습니다.');
      router.back();
    } catch (error) {
      console.log(error);
    }
  };

  const [isSizeDisabled, setIsSizeDisabled] = useState(false);

  // console.log(isSize);

  const selectSize = (e) => {
    const selectedSize = e.target.value;
    setIsSize(selectedSize);
    setIsSizeDisabled(!isSizeDisabled);
  };

  const modifyClothes = async () => {
    const modifyData = {
      productName: { isName },
      size: { isSize },
      price: { isPrice },
    };
    const response = await modifyCloth(modifyData);
    console.log(modifyData);
    console.log(response);
  };

  const addlike = () => {
    console.log('좋아요 ㅋ');
  };

  return (
    <div className={styles.container}>
      <form className={clothStyles.pNameContainer}>
        <input
          type="text"
          name="productName"
          id=""
          className={clothStyles.desc}
          value={isName}
          onChange={(e) => {
            setIsName(e.target.value);
          }}
        />
      </form>
      <div className={clothStyles.imgContainer}>
        {/* <Image src={} alt="로고" />; */}
        <img src={imagePath} alt="" />
        <button className={clothStyles.likedBtn} onClick={addlike}>
          <span className="material-symbols-outlined">favorite</span>
        </button>
      </div>
      <div className={clothStyles.infoContainer}>
        <div>
          <span className={clothStyles.title}>브랜드</span>
          <span>{brand}</span>
        </div>
        <div>
          <span className={clothStyles.title}>카테고리</span>
          <span className={clothStyles.desc}>
            {majorCategory} <span>-</span> <span>{middleCategory}</span>
          </span>
        </div>
        <div>
          <span className={clothStyles.title}>사이즈</span>
          <section className={clothStyles.sizeBox}>
            <button
              className={clothStyles.sizeBtn}
              onClick={(e) => {
                e.preventDefault();
                setIsSizeDisabled(!isSizeDisabled);
              }}
            >
              <span>{isSize}</span>
              <span className="material-symbols-outlined">
                keyboard_arrow_down
              </span>
            </button>
            {isSizeDisabled && (
              <section className={clothStyles.sizeSelectBox}>
                {majorCategory !== 'Shoes' ? (
                  <ul>
                    <li>
                      <input
                        type="button"
                        name=""
                        id="sizeS"
                        className="sizeInput"
                        value="S"
                        onClick={selectSize}
                      />
                    </li>
                    <li>
                      <input
                        type="button"
                        name=""
                        id="sizeM"
                        className="sizeInput"
                        value="M"
                        onClick={selectSize}
                      />
                    </li>
                    <li>
                      <input
                        type="button"
                        name=""
                        id="sizeL"
                        className="sizeInput"
                        value="L"
                        onClick={selectSize}
                      />
                    </li>
                    <li>
                      <input
                        type="button"
                        name=""
                        id="sizeXL"
                        className="sizeInput"
                        value="XL"
                        onClick={selectSize}
                      />
                    </li>
                    <li>
                      <input
                        type="button"
                        name=""
                        id="sizeXXL"
                        className="sizeInput"
                        value="XXL"
                        onClick={selectSize}
                      />
                    </li>
                  </ul>
                ) : (
                  <ul>
                    <li>
                      <input
                        type="button"
                        name=""
                        id="size30"
                        className="sizeInput"
                        value="230"
                        onClick={selectSize}
                      />
                    </li>
                    <li>
                      <input
                        type="button"
                        name=""
                        id="size40"
                        className="sizeInput"
                        value="240"
                        onClick={selectSize}
                      />
                    </li>
                    <li>
                      <input
                        type="button"
                        name=""
                        id="size50"
                        className="sizeInput"
                        value="250"
                        onClick={selectSize}
                      />
                    </li>
                    <li>
                      <input
                        type="button"
                        name=""
                        id="size60"
                        className="sizeInput"
                        value="260"
                        onClick={selectSize}
                      />
                    </li>
                    <li>
                      <input
                        type="button"
                        name=""
                        id="size70"
                        className="sizeInput"
                        value="270"
                        onClick={selectSize}
                      />
                    </li>
                    <li>
                      <input
                        type="button"
                        name=""
                        id="size80"
                        className="sizeInput"
                        value="280"
                        onClick={selectSize}
                      />
                    </li>
                    <li>
                      <input
                        type="button"
                        name=""
                        id="size90"
                        className="sizeInput"
                        value="290"
                        onClick={selectSize}
                      />
                    </li>
                  </ul>
                )}
              </section>
            )}
          </section>
        </div>
        <div>
          <span className={clothStyles.title}>계절</span>
          <span className={clothStyles.desc}>{season}</span>
        </div>
        <div>
          <span className={clothStyles.title}>두께</span>
          <span className={clothStyles.desc}>{thickness}</span>
        </div>
        <div>
          <span className={clothStyles.title}>스타일</span>
          <span className={clothStyles.desc}>{style}</span>
        </div>
        <div>
          <span className={clothStyles.title}>구매가격</span>
          <input
            type="text"
            name="price"
            id=""
            className={clothStyles.descPrice}
            value={isPrice}
            onChange={(e) => {
              setIsPrice(e.target.value);
            }}
          />
        </div>
      </div>
      <div className={clothStyles.btnContainer}>
        <button onClick={modifyClothes}>수정하기</button>
        <button onClick={deleteClothes}>삭제하기</button>
      </div>
    </div>
  );
}
