// Pure cart reducers shared by the cart context and the project submission.
export function addItem(state, id) {
  return { ...state, [id]: (state[id] ?? 0) + 1 };
}

export function removeItem(state, id) {
  const next = { ...state };
  delete next[id];
  return next;
}

export function updateQuantity(state, id, quantity) {
  if (quantity <= 0) return removeItem(state, id);
  return { ...state, [id]: quantity };
}
