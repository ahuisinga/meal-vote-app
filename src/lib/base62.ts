const CHARS_SYMBOLS =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";

export function encode(id: number): string {
  console.log("num id: " + id);
  let hash = "";

  while (id > 0) {
    let i = id % 62;
    console.log("i: " + i);
    hash = CHARS_SYMBOLS[i] + hash;
    console.log("hash so far: " + hash);
    id = Math.floor(id / CHARS_SYMBOLS.length);
  }

  return hash;
}

// this does not work yet
export function decode(code: string): string {
  let id = 0;
  for (let i = 0; i < code.length; i++) {
    id +=
      CHARS_SYMBOLS.indexOf(code[i]) *
      Math.pow(CHARS_SYMBOLS.length, code.length - i - 1);
  }
  return id.toString();
}
