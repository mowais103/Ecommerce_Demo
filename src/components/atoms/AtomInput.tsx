import React, {Fragment, LegacyRef, ReactNode, useMemo} from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import {AtomView} from './AtomView';
import {AtomText} from './AtomText';
import {TColor} from '../../types/styleTypes';

type AtomInputProps = TextInputProps & {
  value?: string | undefined;
  onChangeText?: (text: string) => void;
  LeftElement?: ReactNode;
  RightElement?: ReactNode;
  errorMessage?: string;
  disabled?: boolean | null;
  ref?: LegacyRef<TextInput>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  backgroundColor?: TColor;
  borderColor?: TColor;
  inputTextColor?: TColor;
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 16,
  },
});

const AtomInput = ({
  LeftElement,
  RightElement,
  returnKeyType = 'done',
  disabled,
  errorMessage,
  style,
  inputContainerStyle,
  backgroundColor,
  inputTextColor,
  borderColor,
  ref,
  ...rest
}: AtomInputProps) => {
  const getStyleFromProps = useMemo(() => {
    return [styles.input, style];
  }, [style]);

  const renderError = () =>
    errorMessage ? (
      <AtomText text={errorMessage} color={'red'} pT="small" />
    ) : null;

  const renderLeftElement = () =>
    LeftElement ? (
      <AtomView justifyContent="center" alignItems="center" style={style}>
        {LeftElement}
      </AtomView>
    ) : null;

  const renderRightElement = () =>
    RightElement ? (
      <AtomView justifyContent="center" alignItems="center" style={style}>
        {RightElement}
      </AtomView>
    ) : null;

  const renderInput = () => (
    <TextInput
      {...rest}
      style={[
        getStyleFromProps,
        {color: inputTextColor ? inputTextColor : undefined},
      ]}
      ref={ref}
      editable={!disabled}
      returnKeyType={returnKeyType}
      autoCorrect={false}
    />
  );

  return (
    <Fragment>
      <AtomView
        backgroundColor={backgroundColor}
        style={inputContainerStyle}
        flexDirection="row"
        pH="medium"
        borderColor={borderColor ? borderColor : 'silver'}
        borderRadius={'small'}>
        {renderLeftElement()}
        {renderInput()}
        {renderRightElement()}
      </AtomView>
      {renderError()}
    </Fragment>
  );
};

export {AtomInput};
