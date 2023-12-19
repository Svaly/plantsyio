import { createAction} from '@ngrx/store';

export const loadingStarted = createAction('[App] Loading started');

export const loadingComplete = createAction('[App] Loading complete');

export const logIn = createAction('[App] LogIn Attempt');
