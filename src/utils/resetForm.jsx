export function resetForm(...setters) {
  setters.forEach(set => set(''))
}
