class Permiso {
    permiso!: String
    label!: String
}

export const GESTIONAR: Permiso = {
    permiso:"gestionar",
    label:"Mi menu"
}

export const ORDENAR: Permiso = {
    permiso:"ordenar",
    label:"Atender"
}

export const ANALIZAR: Permiso = {
    permiso:"analizar",
    label:"Mis estadisticas"
}