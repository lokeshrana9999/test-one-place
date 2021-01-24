import React, { useState } from 'react';
import Loadable from 'react-loadable';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { RestfulProvider, useMutate } from 'restful-react';
import { connect } from 'react-redux';

// import ThemeChanger from "./components/look/ThemeChanger";
import { themes } from './styles/themes';
import { ApiContext, AuthApiUrls } from './api';
import { PageLoader } from '@look/mobile';
import { setAccessTokene, setRefreshTokene } from './store/appReducer';

// Profile Pages

const AsyncHome = Loadable({
	loader: () => import(/* webpackChunkName: "homeDefault" */ './components/Home'),
	loading: () => <PageLoader />,
	modules: [ 'homeDefault' ]
});

const AsyncProfile = Loadable({
	loader: () => import(/* webpackChunkName: "profileDefault" */ './components/profile/containers/Profile'),
	loading: () => <PageLoader />,
	modules: [ 'profileDefault' ]
});

const AsyncPublicProfile = Loadable({
	loader: () => import(/* webpackChunkName: "profileDefault" */ './components/profile/containers/PublicProfile'),
	loading: () => <PageLoader />,
	modules: [ 'profilePublicDefault' ]
});

const AsyncProfileEdit = Loadable({
	loader: () => import(/* webpackChunkName: "profileEditDefault" */ './components/profile/containers/ProfileEdit'),
	loading: () => <PageLoader />,
	modules: [ 'profileEditDefault' ]
});

// Auth Pages
const AsyncLogin = Loadable({
	loader: () => import(/* webpackChunkName: "loginDefault" */ './components/auth/LoginView'),
	loading: () => <PageLoader />,
	modules: [ 'loginDefault' ]
});

//BlockPages
const AsyncChooseBlockCategory = Loadable({
	loader: () => import(/* webpackChunkName: "profileEditDefault" */ './components/block/ChooseBlockCategory'),
	loading: () => <PageLoader />,
	modules: [ 'chooseBlockCategoryDefault' ]
});

const AsyncAddBlock = Loadable({
	loader: () => import(/* webpackChunkName: "profileEditDefault" */ './components/block/AddBlock'),
	loading: () => <PageLoader />,
	modules: [ 'addBlockEditDefault' ]
});

const AsyncEditBlock = Loadable({
	loader: () => import(/* webpackChunkName: "profileEditDefault" */ './components/block/EditBlock'),
	loading: () => <PageLoader />,
	modules: [ 'editBlockEditDefault' ]
});

const AsyncBlockDetail = Loadable({
	loader: () => import(/* webpackChunkName: "profileEditDefault" */ './components/block/containers/BlockDetail'),
	loading: () => <PageLoader />,
	modules: [ 'blockDetailDefault' ]
});

//OrderPages
const AsyncCheckout = Loadable({
	loader: () => import(/* webpackChunkName: "profileEditDefault" */ './components/order/containers/Checkout'),
	loading: () => <PageLoader />,
	modules: [ 'checkoutDefault' ]
});

const AsyncMyOrders = Loadable({
	loader: () => import(/* webpackChunkName: "profileEditDefault" */ './components/order/containers/MyOrders'),
	loading: () => <PageLoader />,
	modules: [ 'myOrdersDefault' ]
});

const apiUrl =
	process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_API_URL : process.env.REACT_APP_PROD_API_URL;

const App = (props) => {
	const [ theme, handleThemeChange ] = useState(themes.normal);
	const { accessToken, refreshToken, setAccessTokene, history, appType } = props;
	const { mutate: refreshAccessToken, loading } = useMutate({
		verb: 'POST',
		path: apiUrl + AuthApiUrls.refreshAccessToken
	});
	const restFulErrorHandler = async (error, retry) => {
		console.log('restFulErrorHandler', retry);
		if (error && (error.status > 400 || error.status < 500)) {
			try {
				const refreshAccessTokenData = await refreshAccessToken({
					refreshToken
				});
				await setAccessTokene(refreshAccessTokenData && refreshAccessTokenData.accessToken);
				// console.log('retryRefresh', await retry());
			} catch (e) {
				console.log('refreshError', e);
				history.push(`/login?redirectBack=${history.location.pathname}`);
			}
		}
	};

	return (
		<RestfulProvider
			base={apiUrl}
			resolve={(data) => console.log('restfulprovider', data)}
			// requestOptions={(url, method, requestBody) => ({
			//   headers: { Authorization: `Bearer ${accessToken}` },
			// })}

			onError={restFulErrorHandler}
		>
			<ThemeProvider theme={theme}>
				<div>
					<ApiContext.Provider
						value={
							process.env.NODE_ENV === 'development' ? (
								process.env.REACT_APP_DEV_API_URL
							) : (
								process.env.REACT_APP_PROD_API_URL
							)
						}
					>
						<div>
							<Switch>
								{appType === 'private' && (
									<React.Fragment>
										<Route path="/" exact component={AsyncHome} />
										<Route path="/profile" exact component={AsyncProfile} />
										<Route path="/login" exact component={AsyncLogin} />
										<Route path="/profile/edit" exact component={AsyncProfileEdit} />
										<Route
											path="/block/choose-category"
											exact
											component={AsyncChooseBlockCategory}
										/>
										<Route path="/block/add/:blockCategoryId" exact component={AsyncAddBlock} />
										<Route path="/block/edit/:blockId" exact component={AsyncEditBlock} />
										<Route path="/block/detail/:blockId" exact component={AsyncBlockDetail} />
										<Route path="/order/checkout/:blockId" exact component={AsyncCheckout} />
										<Route path="/order/my" exact component={AsyncMyOrders} />
									</React.Fragment>
								)}
								{appType === 'public' && (
									<React.Fragment>
										<Route path="/" exact component={AsyncPublicProfile} />
									</React.Fragment>
								)}
							</Switch>
						</div>
					</ApiContext.Provider>
				</div>
			</ThemeProvider>
		</RestfulProvider>
	);
};

const mapDispatchToProps = { setAccessTokene, setRefreshTokene };
const mapStateToProps = (state /*, ownProps*/) => {
	return {
		accessToken: state.app.accessToken,
		refreshToken: state.app.refreshToken
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
