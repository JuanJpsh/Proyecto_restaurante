import Permission from '../models/permission';

export const PERMISSIONS: Permission[] = [
  //TOPBAR
  {
    permission: 'manage_restaurant',
    labelMenu: 'Mis restaurantes',
    labelPermission: 'Gestionar restaurantes',
    path: 'rest',
    icon: 'storefront',
  },
  //SIDEBAR
  {
    permission: 'order',
    labelMenu: 'Atender',
    labelPermission: 'Atender',
    path: 'order',
    icon: 'restaurant',
  },
  {
    permission: 'manage_menu',
    labelMenu: 'Mi menu',
    labelPermission: 'Gestionar Menu',
    path: 'menu',
    icon: 'menu_book',
  },
];
