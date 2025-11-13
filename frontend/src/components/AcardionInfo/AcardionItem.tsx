import { useRef } from "react";
import css from "./Acardion.module.css";

interface Props {
  acardionItem: AcardionItemProps;
  onClick: () => void;
  isOpen: boolean;
}

interface AcardionItemProps {
  a: string;
  b: string;
}

export const AcardionItem = ({ acardionItem, onClick, isOpen }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <li className={css.acardionItem}>
      <button className={css.acardionHeader} onClick={onClick}>
        {acardionItem.a}
      </button>
      <div
        ref={contentRef}
        className={css.acardionCollapse}
        style={{
          height:
            isOpen && contentRef.current
              ? `${contentRef.current.scrollHeight}px`
              : "0px",
          overflow: "hidden",
          transition: "height 0.5s ease",
        }}
      >
        <div className={css.diviner}></div>
        <p className={css.acardionBody}>{acardionItem.b}</p>
      </div>
    </li>
  );
};
