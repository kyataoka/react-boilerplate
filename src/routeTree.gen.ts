/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const NotificationtestRouteLazyImport = createFileRoute('/notification_test')()
const ListRouteLazyImport = createFileRoute('/list')()
const AboutRouteLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()
const AboutPageLazyImport = createFileRoute('/about/$page')()

// Create/Update Routes

const NotificationtestRouteLazyRoute = NotificationtestRouteLazyImport.update({
  path: '/notification_test',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/notification_test/route.lazy').then((d) => d.Route),
)

const ListRouteLazyRoute = ListRouteLazyImport.update({
  path: '/list',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/list/route.lazy').then((d) => d.Route))

const AboutRouteLazyRoute = AboutRouteLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about/route.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const AboutPageLazyRoute = AboutPageLazyImport.update({
  path: '/$page',
  getParentRoute: () => AboutRouteLazyRoute,
} as any).lazy(() => import('./routes/about/$page.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      preLoaderRoute: typeof AboutRouteLazyImport
      parentRoute: typeof rootRoute
    }
    '/list': {
      preLoaderRoute: typeof ListRouteLazyImport
      parentRoute: typeof rootRoute
    }
    '/notification_test': {
      preLoaderRoute: typeof NotificationtestRouteLazyImport
      parentRoute: typeof rootRoute
    }
    '/about/$page': {
      preLoaderRoute: typeof AboutPageLazyImport
      parentRoute: typeof AboutRouteLazyImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  AboutRouteLazyRoute.addChildren([AboutPageLazyRoute]),
  ListRouteLazyRoute,
  NotificationtestRouteLazyRoute,
])

/* prettier-ignore-end */
