import {all, call} from 'redux-saga/effects';
import {fetchCollectionStart} from "./shop/shop.sagas";

export default function* rootSaga() {
    yield all([
        yield all([
            call(fetchCollectionStart)]
        )
    ])
}


