import { HTMLAttributes, ReactNode, memo, useContext } from 'react'
import customClsx from '../../../utils/customClsx'
import { ProviderContext } from '../Chips/Chips'
import styles from './Chip.module.scss'

export interface IChip extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  isDisabled?: boolean;
  value: string;
}

const Chip = (props: IChip) => {
  const context = useContext(ProviderContext);
  const computedClassName = customClsx(styles['chip'], props.className);

  const handleClick = () => {
    if (context?.isMultiSelect) {
      context.setValue(
        context.value.includes(props.value)
          ? context.value.filter((item) => item !== props.value)
          : [...context.value, props.value]
      );
    } else {
      context?.setValue([props.value]);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={props?.isDisabled || false}
      className={
        (context?.value.includes(props.value)
          ? styles[`active_size_${context?.size || 'm'}`]
          : styles[`default_size_${context?.size || 'm'}`]) +
        ' ' +
        computedClassName
      }
      style={props.style}
    >
      {props.children}
    </button>
  );
};

export default memo(Chip);
