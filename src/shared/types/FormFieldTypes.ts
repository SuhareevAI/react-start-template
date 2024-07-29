import { FormikContextType, FormikHandlers } from 'formik';
import { valueType } from 'antd/es/statistic/utils';
import { MutableRefObject } from 'react';
import { InputRef } from 'antd';
import { RcFile, UploadChangeParam, UploadFile } from 'antd/es/upload';

export interface FormProps<Values = unknown> {
  className?: string;
  disabled?: boolean;
  formManager: FormikContextType<Values>;
  formElement?: MutableRefObject<HTMLFormElement>;
  autoFocusElement?: MutableRefObject<InputRef>;
}

export type FormFieldProps = Pick<FormProps, 'disabled' | 'autoFocusElement'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: valueType;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
  name: string;
  placeholder: string;
  title: string;
};

export type NumberFormFieldProps = Pick<FormProps, 'disabled' | 'autoFocusElement'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: valueType;
  onChange: (value: valueType) => void;
  onBlur: FormikHandlers['handleBlur'];
  name: string;
  placeholder: string;
  title: string;
};

type OptionType = {
  value: string;
  label: string;
};

export type SelectFieldProps = Pick<FormProps, 'disabled' | 'autoFocusElement'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: valueType;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
  placeholder: string;
  title: string;
  options: OptionType[];
};

export type UploaderProps = Pick<FormProps, 'disabled' | 'autoFocusElement'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  title: string;
  beforeUpload: (file: RcFile, FileList: RcFile[]) => void;
  fileList: UploadFile[];
  onChange: (info: UploadChangeParam<UploadFile>) => void;
};
