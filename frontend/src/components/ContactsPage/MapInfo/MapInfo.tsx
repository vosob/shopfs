import css from "./MapInfo.module.css";

export const MapInfo = () => {
  return (
    <div>
      {/* <!-- Google Maps карта --> */}
      <div className={css.mapContainer}>
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=26.272827386856083%2C50.60420715376102%2C26.290744543075565%2C50.610035562842754&amp;layer=mapnik&amp;marker=50.60712144854993%2C26.28178596496582"
          className={css.mapInfo}
        ></iframe>
      </div>
    </div>
  );
};
