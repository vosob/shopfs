import css from "./MapInfo.module.css";

export const MapInfo = () => {
  return (
    <div>
      {/* <!-- Google Maps карта --> */}
      <div className={css.mapContainer}>
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=26.2428081035614%2C50.608285754182305%2C26.260725259780887%2C50.61411365805069&amp;layer=mapnik&amp;marker=50.611199796362%2C26.251766681671143"
          className={css.mapInfo}
        ></iframe>
      </div>
    </div>
  );
};
