export default {
    addRequest(state, payload) {
        state.requests.push(payload);
    },
    getRequests(state) {
        return state.requests;
    }
};
