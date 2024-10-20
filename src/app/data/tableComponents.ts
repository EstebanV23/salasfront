export interface Column {
  uid: string
  name: string
}

export const columns: Column[] = [
  { uid: 'name', name: 'N' },
  { uid: 'role', name: 'Sala'},
  { uid: 'people', name: 'Capacidad'},
  { uid: 'status', name: 'Estado'},
  { uid: 'actions', name: 'Acciones'},
]