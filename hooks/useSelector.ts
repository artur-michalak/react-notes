import { TypedUseSelectorHook, useSelector as useBasicSelector } from 'react-redux';

import { State } from '@/services/redux';

const useSelector: TypedUseSelectorHook<State> = useBasicSelector;
export default useSelector;
