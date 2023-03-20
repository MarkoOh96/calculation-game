import { Subject } from 'rxjs';
import { ActionTypes } from './actions';

export interface InitialState {
  results: Array<Object>;
}

interface Event {
  type: String;
  payload?: Object;
}

let state: InitialState = {
  results: [],
};

export const store = new Subject<InitialState>();
export const eventDispatcher = new Subject<Event>();

eventDispatcher.subscribe((data: Event) => {
  switch (data.type) {
    case ActionTypes.GET_RESULTS:
      store.next(state);
      break;

    case ActionTypes.CREATE_RESULT:
      state = {
        results: [...state.results, data.payload!],
      };
      store.next(state);
      break;

    default:
      break;
  }
});
