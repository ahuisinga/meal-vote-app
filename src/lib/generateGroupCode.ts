import { decode, encode } from "./base62";

export default function generateGroupCode(): string {
  const id = Date.now();
  const groupCode = encode(id);
  console.log(id);
  console.log(groupCode);
  console.log(decode(groupCode));
  return groupCode;
}
