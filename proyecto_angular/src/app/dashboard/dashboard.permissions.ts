import Permission from '../models/permission';

export const PERMISSIONS: Permission[] = [
  {
    permission: 'manage_restaurant',
    labelMenu: 'Mis restaurantes',
    labelPermission: 'Gestionar restaurantes',
    icon: 'storefront',
  },
  {
    permission: 'manage_menu',
    labelMenu: 'Mi menu',
    labelPermission: 'Gestionar Menu',
    icon: 'menu_book',
  },
  {
    permission: 'order',
    labelMenu: 'Atender',
    labelPermission: 'Atender',
    icon: 'restaurant',
  },
];
