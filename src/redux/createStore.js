import { applyMiddleware, createStore, compose } from 'redux';
import { offline } from '@redux-offline/redux-offline';
import defaultConfig from '@redux-offline/redux-offline/lib/defaults';
import { createLogger } from "redux-logger";
import thunk from 'redux-thunk';

import rootReducer from "./rootReducer";

const logger = createLogger({});

const middleware = [
    thunk,
    logger
];


const offlineConfig = {
    ...defaultConfig,
    persistOptions: {
        blacklist: ['modal']
    }
};



const customCreateStore = () => {
    const store = createStore(rootReducer, compose(
        applyMiddleware(...middleware),
        offline(offlineConfig)
    ));
    return { store };
};

export default customCreateStore;