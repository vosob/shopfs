import css from "./Filters.module.css";

interface FiltersProps {
  onSearchChange: (value: string) => void;
}

export const Filters = ({ onSearchChange }: FiltersProps) => {
  return (
    <div className={css.filtersContainer}>
      <input
        type="text"
        placeholder="Пошук букетів..."
        // value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};
