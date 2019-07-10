import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect";

export const userIsAuthenticated = connectedRouterRedirect({
    authenticatedSelector: state => state.app.isLoggedIn,
    wrapperDisplayName: 'UserIsAuthenticated',
    redirectPath: '/screen1'
});