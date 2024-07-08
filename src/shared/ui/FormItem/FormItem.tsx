import React, { memo } from 'react';
import { Form } from 'antd';

export type Help = null | React.ReactNode;
export type ValidateStatus = 'error' | '';

export type FormItemProps = {
  className?: string;
  title: React.ReactNode | React.ReactNode[];
  children: React.ReactNode | React.ReactNode[];
  validateStatus: ValidateStatus;
  help: Help;
  required?: boolean;
};

export const FormItem = memo<FormItemProps>(({ validateStatus, required, help, className, title, children }) => (
  <div>
    <Form.Item validateStatus={validateStatus} help={help} className={className} required={required} tooltip={title}>
      {children}
    </Form.Item>
  </div>
));

FormItem.displayName = 'FormItem';
