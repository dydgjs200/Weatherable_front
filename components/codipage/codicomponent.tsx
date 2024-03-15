'use client';
import React, { useState } from 'react';
import styles from '../../styles/codi/codi.module.scss';

export default function Mainpagebutton() {
  const [images, setImages] = useState<Array<string | null>>([
    null, // 모자
    null, // 겉옷
    null, // 상의
    null, // 하의
    null, // 신발
  ]);

  const handleImageUpload =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const newImages = [...images];
          newImages[index] = reader.result as string;
          setImages(newImages);
        };
        reader.readAsDataURL(file);
      }
    };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.hat}>
          {images[0] ? (
            <img src={images[0]} alt="Hat" className={styles.image} />
          ) : (
            <>
              <span className={styles.placeholder}> Hat</span>
              <input
                type="file"
                id={`file-input-0`}
                className={styles.fileInput}
                accept="image/*"
                onChange={handleImageUpload(0)}
              />
            </>
          )}
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.Outerwear}>
          {images[1] ? (
            <img src={images[1]} alt="Outerwear" className={styles.image} />
          ) : (
            <>
              <span className={styles.placeholder}> Outerwear</span>
              <input
                type="file"
                id={`file-input-1`}
                className={styles.fileInput}
                accept="image/*"
                onChange={handleImageUpload(1)}
              />
            </>
          )}
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.Top}>
          {images[2] ? (
            <img src={images[2]} alt="Top" className={styles.image} />
          ) : (
            <>
              <span className={styles.placeholder}> Top</span>
              <input
                type="file"
                id={`file-input-2`}
                className={styles.fileInput}
                accept="image/*"
                onChange={handleImageUpload(2)}
              />
            </>
          )}
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.Bottom}>
          {images[3] ? (
            <img src={images[3]} alt="Bottom" className={styles.image} />
          ) : (
            <>
              <span className={styles.placeholder}> Bottom</span>
              <input
                type="file"
                id={`file-input-3`}
                className={styles.fileInput}
                accept="image/*"
                onChange={handleImageUpload(3)}
              />
            </>
          )}
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.Shoes}>
          {images[4] ? (
            <img src={images[4]} alt="Shoes" className={styles.image} />
          ) : (
            <>
              <span className={styles.placeholder}> Shoes</span>
              <input
                type="file"
                id={`file-input-4`}
                className={styles.fileInput}
                accept="image/*"
                onChange={handleImageUpload(4)}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
