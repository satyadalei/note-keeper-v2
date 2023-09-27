import { configureStore } from '@reduxjs/toolkit'
import  counterLightMode from './lightModeReduxStore'


export default configureStore({
    reducer: {
        counterMode : counterLightMode
    }
})