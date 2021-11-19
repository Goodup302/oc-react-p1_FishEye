class GlobalState {
    state = [];

    constructor(state = []) {
        this.state = state
    }

    setState(index, value) {
        return this.state[index] = value
    }

    getState(index) {
        return this.state[index]
    }
}

export default GlobalState
