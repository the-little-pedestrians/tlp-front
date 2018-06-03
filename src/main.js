// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import { split } from 'apollo-link'
import fetch from 'unfetch'

import App from './App'
import router from './router'

import 'vuetify/dist/vuetify.min.css'

const httpLink = createHttpLink({
  uri: process.env.SERVER_URL || 'http://back/graphql',
  fetch: fetch
})

const wsLink = new WebSocketLink({
  uri: process.env.SERVER_URL_SUB || 'wss://socoback.herokuapp.com/subscriptions',
  options: {
    reconnect: true
  }
})

const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query)
    return definition.kind === 'OperationDefinition' &&
    definition.operation === 'subscription'
  },
  wsLink,
  httpLink
)

export const apolloClient = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
})

Vue.use(Vuetify, {
  theme: {
    primary: '#ddd',
    secondary: '#333333',
    accent: '#C52B2B'
  }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  provide: apolloProvider.provide(),
  router,
  components: { App },
  template: '<App/>'
})
