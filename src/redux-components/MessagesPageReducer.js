const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Friend1'},
        {id: 2, name: 'Friend2'},
        {id: 3, name: 'Friend3'},
        {id: 4, name: 'Friend4'},
        {id: 5, name: 'Friend5'},
        {id: 6, name: 'Friend6'}
    ],
    messages: [
        {id: 1, message: 'Heyyy!:)'},
        {id: 2, message: 'What\'s up?'},
        {id: 3, message: 'I miss you'},
        {id: 4, message: 'Yeahhh'},
        {id: 5, message: 'Yo'}
    ],
    newMessage: ""
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE:
            return {
                ...state,
                newMessage: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessage;
            return {
                ...state,
                newMessage: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateMessageActionCreator = (body) =>
    ({type: UPDATE_MESSAGE, body: body})

export default messagesReducer;