import style from './CardPost.module.css';

type CardPostProps = {
  id: number;
  image: string | undefined;
  text: string;
  date: string;
  title: string;
  onPreViewClick?: (id: number) => void;
};
export const CardPost: React.FC<CardPostProps> = ({
  id,
  image,
  text,
  date,
  title,
  onPreViewClick,
}) => {
  return (
    <div className={style.item} id={`${id}`}>
      <div className={style.wrapper}>
        <img className={style.img} src={image} alt="Oops! Don't worry" />
      </div>
      <h2 className={style.title}>{title}</h2>
      <p className={style.text}>{text}</p>
      <div className={style.row}>
        <p className={style.date}>{date}</p>
        <div
          className={style.pic}
          onClick={(event) => {
            onPreViewClick?.(id);
            event.preventDefault();
          }}
        >
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 224.549 224.549"
            xmlSpace="preserve"
          >
            <g>
              <path
                d="M223.476,108.41c-1.779-2.96-44.35-72.503-111.202-72.503S2.851,105.45,1.072,108.41c-1.43,2.378-1.43,5.351,0,7.729
		c1.779,2.96,44.35,72.503,111.202,72.503s109.423-69.543,111.202-72.503C224.906,113.761,224.906,110.788,223.476,108.41z
		 M112.274,173.642c-49.925,0-86.176-47.359-95.808-61.374c9.614-14.032,45.761-61.36,95.808-61.36
		c49.925,0,86.176,47.359,95.808,61.374C198.468,126.313,162.321,173.642,112.274,173.642z"
              />
              <path
                d="M112.274,61.731c-27.869,0-50.542,22.674-50.542,50.543c0,27.868,22.673,50.54,50.542,50.54
		c27.868,0,50.541-22.672,50.541-50.54C162.815,84.405,140.143,61.731,112.274,61.731z M112.274,147.814
		c-19.598,0-35.542-15.943-35.542-35.54c0-19.599,15.944-35.543,35.542-35.543s35.541,15.944,35.541,35.543
		C147.815,131.871,131.872,147.814,112.274,147.814z"
              />
              <path
                d="M112.274,92.91c-10.702,0-19.372,8.669-19.372,19.364c0,10.694,8.67,19.363,19.372,19.363
		c10.703,0,19.373-8.669,19.373-19.363C131.647,101.579,122.977,92.91,112.274,92.91z"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};
