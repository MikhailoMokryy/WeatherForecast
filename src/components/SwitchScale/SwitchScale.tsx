import { Dispatch, SetStateAction, useContext } from 'react';
import { ScaleType } from '../../models/enums/ScaleType';
import { ScaleContext } from '../FullWeather/FullWeather';
import styles from './SwitchScale.module.scss';

export interface IProps {
  onScaleChange: Dispatch<SetStateAction<ScaleType>>;
}

export default function SwitchScale({ onScaleChange }: IProps) {
  const scaleType: ScaleType = useContext(ScaleContext);

  return (
    <div className={styles.switch}>
      <button
        onClick={() =>
          onScaleChange(scaleType === ScaleType.C ? ScaleType.F : ScaleType.C)
        }
        className={styles.btn}
      >
        {scaleType}
      </button>
    </div>
  );
}
