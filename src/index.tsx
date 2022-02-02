import 'assets/styles/index.sass'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

// TODO: Put uri in a config file
const client = new ApolloClient({
	uri: 'https://localhost:5001/graphql',
	cache: new InMemoryCache(),
	credentials: 'omit',
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
		'Access-Control-Allow-Headers':
			'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
	},
})

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ApolloProvider client={client}>
				<App />
			</ApolloProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
)
