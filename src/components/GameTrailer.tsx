import useTrailers from "../hooks/useTrailers";
import styles from './GameTrailer.module.css';


interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  //Custom Trailer for Mobile Legends
  if (gameId === 7877)
    return <div className={styles.container}>
      <iframe className={styles.responsive}
        width="100%"
        height="50%"
        src="https://www.youtube.com/embed/NVBCHm89_vI"
        title="Mobile Legends Bot Gameplay"
        allow="accelerometer; autoplay; 
      clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture; 
      web-share" allowFullScreen></iframe>
    </div>

  const first = data?.results[0];

  return first ? (
    <video
      src={first.data['max']}
      poster={first.preview}
      controls
    />
  ) : null;
};

export default GameTrailer;