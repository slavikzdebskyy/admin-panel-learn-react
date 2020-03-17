import { personalActivTypes } from "../action/personal.actions";

const personalReducer = (state = [], {type, payload}) => {
    switch (type) {
        case personalActivTypes.add:
            return [...state, ...payload];

        case personalActivTypes.remove:
            return state.filter( person => person.id !== payload);

        case personalActivTypes.modify:
            return state.map(person => person.id !== payload.id ? person : payload);

        case personalActivTypes.load:
            return [...state, ...payload];

        default:
            return state;
    }
}

export default personalReducer;
