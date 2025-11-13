import { useState } from "react";
import css from "./Acardion.module.css";
import { AcardionItem } from "./AcardionItem";

interface AcardionText {
  a: string;
  b: string;
}

interface Props {
  acardionText: AcardionText[];
}

export const Acardion = ({ acardionText }: Props) => {
  const [openId, setId] = useState<number | null>(null);

  return (
    <ul className={css.acardion}>
      {acardionText.map((acardionItem, id) => {
        return (
          <AcardionItem
            key={id}
            acardionItem={acardionItem}
            isOpen={id === openId}
            onClick={() => (id === openId ? setId(null) : setId(id))}
          />
        );
      })}
    </ul>
  );
};
