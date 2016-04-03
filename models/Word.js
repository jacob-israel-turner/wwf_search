import { type, thinky } from '../constants/app-constants'

export const Word = thinky.createModel("Word", {
    id: type.string(),
    word: type.string(),
}) 

