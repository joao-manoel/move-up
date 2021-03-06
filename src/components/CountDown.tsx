import { useContext} from 'react';
import { CountContext } from '../contexts/CountContext';

import styles from '../styles/components/CountDown.module.css';



export function CountDown() {
  const {
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    resetCount, 
    startCount
  } = useContext(CountContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  

  return (
    <div>
      <div className={styles.countDownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button 
          disabled
          className={styles.countDownButton}
        >
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button 
              type="button" 
              className={`${styles.countDownButton} ${styles.countDownButtonActive} `}
              onClick={resetCount}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button 
              type="button" 
              className={styles.countDownButton}
              onClick={startCount}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}

      

      

      
    </div>
  );
}