import Permiso from "src/modelos/permiso"

export const PERMISOS: Permiso[] = [
    {
        permiso:"gestionar_aplicacion",
        labelMenu:"Configuración",
        labelPermiso:"Gestionar aplicacion",
        icon:"settings"
    },
    {
        permiso:"gestionar_restaurantes",
        labelMenu:"Mis restaurantes",
        labelPermiso:"Gestionar restaurantes",
        icon:"storefront"
    },
    {
        permiso:"gestionar_menu",
        labelMenu:"Mi menu",
        labelPermiso:"Gestionar Menu",
        icon:"menu_book"
    },
    {
        permiso:"ordenar",
        labelMenu:"Atender",
        labelPermiso:"Atender",
        icon:"restaurant"
    },
    {
        permiso:"ver_propinas",
        labelMenu:"Propinas",
        labelPermiso:"Ver propinas",
        icon:"paid"
    },
    {
        permiso:"analizar",
        labelMenu:"Mis estadisticas",
        labelPermiso:"Ver estadisticas",
        icon:"bar_chart"
    },
    {
        permiso:"gestionar_personal",
        labelMenu:"Personal",
        labelPermiso:"Gestionar personal",
        icon:"badge"
    }
]