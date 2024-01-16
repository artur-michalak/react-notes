import { useDispatch as useBasicDispatch } from 'react-redux';

import { Action } from '@/services/redux';
import { Dispatch } from '@reduxjs/toolkit';

const useDispatch = useBasicDispatch<Dispatch<Action<unknown>>>;
export default useDispatch;
