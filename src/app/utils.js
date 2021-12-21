import {ethers} from 'ethers';

export function assert(fn) {
  if (!fn()) {
    throw new Error("Assertion failed");
  }
}

export function isValidEthereumAddress(addr) {
  try {
    ethers.utils.getAddress(addr);
    return true;
  } catch (e) {
    return false;
  }
}

export function truncateLongAddress(addr, maxLength = 12) {
  if (addr.length <= maxLength) {
    return addr;
  }

  if (maxLength < 12) {
    throw new Error("maxLength must be at least 12");
  }
  const leftLength = (maxLength - 3) / 2 + 1;
  const rightLength = maxLength - 3 - leftLength;
  return addr.substring(0, leftLength) + '...' + addr.substring(addr.length - rightLength);
}
