/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SignupImport } from './routes/signup'
import { Route as LoginImport } from './routes/login'
import { Route as HousesImport } from './routes/houses'
import { Route as ApartmentsRouteImport } from './routes/apartments/route'
import { Route as AuthRouteImport } from './routes/_auth/route'
import { Route as IndexImport } from './routes/index'
import { Route as ApartmentsIdImport } from './routes/apartments/$id'
import { Route as AuthProtectedImport } from './routes/_auth/protected'

// Create/Update Routes

const SignupRoute = SignupImport.update({
  path: '/signup',
  getParentRoute: () => rootRoute
} as any)

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute
} as any)

const HousesRoute = HousesImport.update({
  path: '/houses',
  getParentRoute: () => rootRoute
} as any)

const ApartmentsRouteRoute = ApartmentsRouteImport.update({
  path: '/apartments',
  getParentRoute: () => rootRoute
} as any)

const AuthRouteRoute = AuthRouteImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute
} as any)

const ApartmentsIdRoute = ApartmentsIdImport.update({
  path: '/$id',
  getParentRoute: () => ApartmentsRouteRoute
} as any)

const AuthProtectedRoute = AuthProtectedImport.update({
  path: '/protected',
  getParentRoute: () => AuthRouteRoute
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      preLoaderRoute: typeof AuthRouteImport
      parentRoute: typeof rootRoute
    }
    '/apartments': {
      preLoaderRoute: typeof ApartmentsRouteImport
      parentRoute: typeof rootRoute
    }
    '/houses': {
      preLoaderRoute: typeof HousesImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/signup': {
      preLoaderRoute: typeof SignupImport
      parentRoute: typeof rootRoute
    }
    '/_auth/protected': {
      preLoaderRoute: typeof AuthProtectedImport
      parentRoute: typeof AuthRouteImport
    }
    '/apartments/$id': {
      preLoaderRoute: typeof ApartmentsIdImport
      parentRoute: typeof ApartmentsRouteImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  AuthRouteRoute.addChildren([AuthProtectedRoute]),
  ApartmentsRouteRoute.addChildren([ApartmentsIdRoute]),
  HousesRoute,
  LoginRoute,
  SignupRoute
])

/* prettier-ignore-end */
