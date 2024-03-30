import { decode, encode } from "./base36";

export default function generateGroupCode(): string {
  const id = Date.now();
  const groupCode = encode(id);
  return groupCode;
}
