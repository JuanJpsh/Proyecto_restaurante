class Permiso {
    permiso!: String
    label!: String
    icon?: String
}

export const GESTIONAR_MENU: Permiso = {
    permiso:"gestionar_menu",
    label:"Mi menu",
    icon:"menu_book"
}

export const ORDENAR: Permiso = {
    permiso:"ordenar",
    label:"Atender",
    icon:"restaurant"
}

export const VER_PROPINAS: Permiso = {
    permiso:"ver_propinas",
    label:"Propinas",
    icon:"paid"
}

export const ANALIZAR: Permiso = {
    permiso:"analizar",
    label:"Mis estadisticas",
    icon:"bar_chart"
}

export const GESTIONAR_PERSONAL: Permiso = {
    permiso:"gestionar_personal",
    label:"Personal",
    icon:"badge"
}

export const GESTIONAR_APLICACION: Permiso = {
    permiso:"gestionar_aplicacion",
    label:"Configuración",
    icon:"settings"
}