const CHARS_SYMBOLS =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";

export function encode(id: number): string {
  let hash = "";

  while (id > 0) {
    let i = id % CHARS_SYMBOLS.length;
    hash = CHARS_SYMBOLS[i] + hash;
    id = Math.floor(id / CHARS_SYMBOLS.length);
  }

  return hash;
}

// this does not work yet
export function decode(code: string): string {
  let id = 0;
  for (let i = 0; i < code.length; i++) {
    id = CHARS_SYMBOLS.indexOf(code[i]) + CHARS_SYMBOLS.length * id;
  }
  return id.toString();
}
