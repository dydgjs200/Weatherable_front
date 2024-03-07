import styles from '../../../../../../styles/closet/closet.module.scss';

export default function AddClothes() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.addForm}>
        <label htmlFor="">제품명</label>
        <input type="text" name="" id="" />
        <input type="image" name="" id="" />
        <label htmlFor="">브랜드</label>
        <input type="text" name="" id="" />
        <label htmlFor="">사이즈</label>
        <select name="" id="">
          <option value="">S</option>
          <option value="">M</option>
          <option value="">L</option>
          <option value="">XL</option>
        </select>

        <label htmlFor="">카테고리</label>
        <label htmlFor="">두께</label>
        <input type="button" name="" id="" value={'봄'} />

        <label htmlFor="">색</label>

        <label htmlFor="">구매가격</label>
        <input type="number" name="" id="" />
      </form>
    </div>
  );
}
