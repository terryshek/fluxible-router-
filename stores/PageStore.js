/**
 * Copyright 2014, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
import {BaseStore} from 'fluxible/addons';

class PageStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.content = 'initial content...';
    }
    handleContentChange(payload) {
        console.log(payload)
        this.content = 'content for page with id '+payload.id;
        this.emitChange();
    }
    getState() {
        return {
            content: this.content
        };
    }
    dehydrate() {
        return this.getState();
    }
    rehydrate(state) {
        this.content = state.content;
    }
}

PageStore.storeName = 'PageStore'; // PR open in dispatchr to remove this need
PageStore.handlers = {
    'LOAD_PAGE': 'handleContentChange'
};

export default PageStore;
