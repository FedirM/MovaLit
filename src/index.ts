import { Route, Router } from '@vaadin/router';

import './app.element';
import './components/home/home.element';

const routes: Route[] = [
    {
        path: '/',
        component: 'app-element',
        children: [
            {
                path: 'home',
                component: 'home-element'
            },
            {
                path: 'about',
                component: 'test-element',
                action: () => { import('./components/test/test.element') }
            },
            {
                path: 'reader',
                component: 'home-element'
            }
        ]
    }
];

console.log('[routes.ts]: start...');


const outlet = document.getElementById('outlet');

export const router = new Router();

router.setOutlet(outlet);
router.setRoutes(routes);