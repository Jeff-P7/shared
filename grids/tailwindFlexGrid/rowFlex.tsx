import React from 'react';
import PropTypes from 'prop-types';
import Div from './div';
import { DivInterface } from '../divInterProps';

const justifyOneOfType: Array<string> = [
  'start',
  'end',
  'center',
  'between',
  'around',
  'evenly',

  'items-start',
  'items-end',
  'items-center',
  'items-stretch',

  ''
];

const alignOneOfType: Array<string> = [
  'content-center',
  'content-start',
  'content-end',
  'content-between',
  'content-around',
  'content-evenly',

  'items-start',
  'items-end',
  'items-center',
  'items-baseline',
  'items-stretch',

  ''
];

const justifyTypeOf = [...justifyOneOfType] as const;
const alignTypeOf = [...alignOneOfType] as const;

interface Props extends DivInterface {
  stack?: boolean;
  justify?: typeof justifyTypeOf[number];
  align?: typeof alignTypeOf[number];
}

const RowFlex: React.FC<Props> = (props): JSX.Element => {
  const { children, stack, colorize } = props;

  // const ColChild:React.FC
  return <Div classes="" {...props}>{children}</Div>;
};

const propTypes: { [key in keyof Props]: any } = {
  stack: PropTypes.bool,
  justify: PropTypes.oneOf(justifyOneOfType),
  align: PropTypes.oneOf(alignOneOfType)
};

const defaultProps: Props = {
  stack: false,
  justify: '',
  align: ''
};

RowFlex.propTypes = propTypes;
RowFlex.defaultProps = defaultProps;

export default RowFlex;
