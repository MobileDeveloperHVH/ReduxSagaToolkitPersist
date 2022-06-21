import {createAction} from '@reduxjs/toolkit';
import { NAME_SPACE } from './reducer';

export const getValue = createAction<{value: number}>(NAME_SPACE + '/getValue');
