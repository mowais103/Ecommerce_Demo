import React, {LegacyRef, ReactNode, useMemo} from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import {AtomView} from './AtomView';
import {AtomText} from './AtomText';

type AtomInputProps = TextInputProps & {
  value?: string | undefined;
  onChangeText?: (text: string) => void;
  LeftElement?: ReactNode;
  RightElement?: ReactNode;
  errorMessage?: string;
  disabled?: boolean | null;
  ref?: LegacyRef<TextInput>;
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
  ref,
  ...rest
}: AtomInputProps) => {
  const getStyleFromProps = useMemo(() => {
    return [styles.input, style];
  }, [style]);

  const renderError = () =>
    errorMessage ? (
      <AtomText text={errorMessage} color={'red'} pT="xs" />
    ) : undefined;

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
      style={getStyleFromProps}
      ref={ref}
      editable={!disabled}
      returnKeyType={returnKeyType}
    />
  );

  return (
    <>
      <AtomView
        flexDirection="row"
        pH="medium"
        borderColor="silver"
        borderRadius={'small'}>
        {renderLeftElement()}
        {renderInput()}
        {renderRightElement()}
      </AtomView>
      {renderError()}
    </>
  );
};

export {AtomInput};
