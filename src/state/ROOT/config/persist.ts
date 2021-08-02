// Configs
import AsyncStorage from '@react-native-community/async-storage';

const root = { key: 'ICSRoot', storage: AsyncStorage, blacklist: ['common'], timeout: null };

const common = { key: 'ICSCommon', storage: AsyncStorage, whitelist: ['home'], timeout: null };

export { root, common };
