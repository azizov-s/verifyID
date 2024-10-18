import {
  HTMLAttributes,
  ReactElement,
  createContext,
  useEffect,
} from 'react'
// import customClsx from 'utils/customClsx';
import customClsx from '../../../utils/customClsx'
import styles from './Chips.module.scss'

interface ChipsProps extends HTMLAttributes<HTMLDivElement> {
  isMultiSelect?: boolean;
  isDefaultMultiSelect?: boolean;
  value: string[];
  setValue: (prevState: string[]) => void;
  children: ReactElement[];
  mW?: string;
  w?: string;
  size?: 's' | 'm' | 'l';
}

interface IContext {
  size?: 's' | 'm' | 'l';
  value: string[];
  setValue: (prevState: string[]) => void;
  isMultiSelect?: boolean;
}

export function useDefaultSelected(children: ReactElement[]) {
  for (let i = 0; i < children.length; i++) {
    if (
      !children[i]?.props?.isDisabled &&
      children[i]?.props?.isDisabled === undefined
    ) {
      return children[i]?.props?.value;
    }
  }
  return '';
}

export const ProviderContext = createContext<IContext | null>(null);
const Chips = (props: ChipsProps) => {
  const {
    mW = '',
    w = '100%',
    size = 'm',
    value,
    setValue,
    children,
    isMultiSelect,
    isDefaultMultiSelect,
    style,
    className,
  } = props;

  const computedClassName = customClsx(styles['button'], className);

  const findDefaultSelect = () => {
    if (Boolean((!value.length && !isMultiSelect) || isDefaultMultiSelect)) {
      setValue([useDefaultSelected(children)]);
    }
  };

  useEffect(() => {
    findDefaultSelect();
  }, [isMultiSelect]);

  return (
    <ProviderContext.Provider value={{ value, setValue, isMultiSelect, size }}>
      <div
        className={styles.container + ' ' + computedClassName}
        style={{ maxWidth: mW, width: w, ...style }}
      >
        {children}
      </div>
    </ProviderContext.Provider>
  );
};

export default Chips;
