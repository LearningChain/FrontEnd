import {
  ChangeEvent,
  InputHTMLAttributes,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react';

import {
  SliderContainer,
  SlideInput,
  SlideTrack,
  SlideProgressContainer,
  SlideProgressBar,
  SliderLabelRow,
} from './Slider.styles';

export interface SliderProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    value? :number;
    minValue?: number;
    maxValue?: number;
    label?: {
        min: string;
        max: string;
        mid? : string;
    };

    tooltip?: ReactElement;

    onChange?: (value: number) => void;
}

const Slider = ({
  min = 1,
  max = 5,
  minValue = Number(min),
  maxValue = Number(max),
  value: outerValue = (minValue + maxValue) / 2,
  label,
  onChange,
  ...props
}: SliderProps) => {
  const [value, setValue] = useState<number>(outerValue);
  const progress = (value - minValue) / (maxValue - minValue);

  const handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        const val = Number(event.target.value);
        setValue(val);
        onChange?.(val);
      },
      [onChange],
  );

  useEffect(() => {
    setValue(outerValue);
  }, [outerValue]);

  return (
    <div>
      <SliderContainer>
        <SlideTrack>
          <SlideProgressContainer
            style={{transform: `translateX(${progress * 100}%)`}} >
            <SlideProgressBar />
          </SlideProgressContainer>
        </SlideTrack>
        <SlideInput
          type="range"
          value={value}
          min={minValue}
          max={maxValue}
          onChange={handleChange}
          {...props}
        />
      </SliderContainer>
      {label !== undefined ? (
        <SliderLabelRow>
          <SliderLabelRow>{label.min}</SliderLabelRow>
          {label.mid != null ? (
            <SliderLabelRow>{label.mid}</SliderLabelRow>
          ) : null}
          <SliderLabelRow>{label.max}</SliderLabelRow>
        </SliderLabelRow>
      ) : null}
    </div>
  );
};

export default Slider;
