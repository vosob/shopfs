import { Link, useLocation, useParams } from "react-router";
import css from "./Breadcrumbs.module.css";
import { fetchBouquetById } from "../../services/items";
import { useQuery } from "@tanstack/react-query";
import { Bouquet } from "../../types/typesItem";

export const Breadcrumbs = () => {
  const location = useLocation();
  const { id } = useParams();

  const { data: bouquet } = useQuery<Bouquet>({
    queryKey: ["bouquet", id],
    queryFn: () => fetchBouquetById(id!),
    enabled: !!id,
  });

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index, array) => {
      currentLink += `/${crumb}`;

      const isLast = index === array.length - 1;
      const label = isLast && bouquet ? bouquet.name : crumb;

      return (
        <div className={css.crumb} key={crumb}>
          <Link to={currentLink}>{label}</Link>
        </div>
      );
    });

  return <div className={css.breadcrumbs}>{crumbs}</div>;
};
