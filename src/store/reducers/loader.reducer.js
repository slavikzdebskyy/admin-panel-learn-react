const loaderReducer = (isLoading = false, action) => {
    switch (action.type) {

        case 'SET_LOADER':
            return true;

        case 'REMOVE_LOADER':
            return false;

        default:
            return false;
    }
};

export default loaderReducer;