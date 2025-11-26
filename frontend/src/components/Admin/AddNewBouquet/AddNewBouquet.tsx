// import { UseFormRegister } from "react-hook-form";
// import { AdminFormData } from "../../../pages/AdminPage/AdminPage";
// import { flowers } from "../data";
// import css from "./AddNewBouquet.module.css";

// export enum Size {
//   SMALL = 40,
//   MEDIUM = 50,
//   LARGE = 60,
// }

// interface AddNewBouquetProps {
//   register: UseFormRegister<AdminFormData>;
//   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
// }

// export const AddNewBouquet = ({
//   handleSubmit,
//   register,
// }: AddNewBouquetProps) => {
//   return (
//     <form className={css.form} onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label className={css.label} htmlFor="name_uk">
//           <span>Bouquet name (Ukrainian)</span>
//           <input
//             placeholder="Вессняний світ"
//             type="text"
//             {...register("name_uk")}
//           />
//         </label>
//       </div>

//       <div className="form-group">
//         <label className={css.label} htmlFor="name_en">
//           <span>Bouquet name (English)</span>
//           <input
//             placeholder="Spring world"
//             type="text"
//             {...register("name_en")}
//           />
//         </label>
//       </div>

//       <div className="form-group">
//         <label className={css.label} htmlFor="size">
//           <span>Bouquet size</span>
//           <select {...register("size", { valueAsNumber: true })}>
//             <option value={Size.SMALL}>Small</option>
//             <option value={Size.MEDIUM}>Medium</option>
//             <option value={Size.LARGE}>Large</option>
//           </select>
//         </label>
//       </div>

//       <div className="form-group">
//         <label className={css.label} htmlFor="price">
//           <span>Bouquet price</span>
//           <input
//             min={0}
//             step={10}
//             max={2000}
//             type="number"
//             {...register("price", { valueAsNumber: true })}
//           />
//         </label>
//       </div>

//       <div className="form-group">
//         <label className={css.label}>
//           <span>Flowers included in bouquet</span>
//         </label>

//         <div className={css.checkboxGroup}>
//           {flowers.map((flower) => (
//             <div className={css.checkbox} key={flower.name_uk}>
//               <input
//                 type="checkbox"
//                 id={flower.name_uk}
//                 value={flower.name_uk}
//                 {...register("flowers")}
//               />
//               <label htmlFor={flower.name_uk}>{flower.name_uk}</label>
//             </div>
//           ))}
//         </div>
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };
