export function saveState<T>(object: T, name: string) {
  localStorage.setItem(name, JSON.stringify(object));
}

export function loadState<T>(name: string): T | null {
  const localState: string | null = localStorage.getItem(name);
  return localState ? (JSON.parse(localState) as T) : null;
}
