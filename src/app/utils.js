import {ethers} from 'ethers';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useState } from 'react';
import { isBech32Address } from '@harmony-js/utils';
import { fromBech32 } from '@harmony-js/crypto';

export function formatTokenValue(value, tokenName) {
  const formatedValue = (value / 10 ** 18).toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
  return `${formatedValue} ${tokenName}`;
}

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

export function Copiable(props) {
  const [copied, setCopied] = useState(false);

  const clickToCopy = () => {
    navigator.clipboard.writeText(props.textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };

  return <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{copied ? 'Copied!' : props.tooltipText || 'Click to copy'}</Tooltip>}>
    <span onClick={clickToCopy} className="d-inline-block" style={{cursor: 'pointer'}}>
      {props.children}
    </span>
  </OverlayTrigger>
}

export function truncateLongAddressCopiable(addr, maxLength = 12) {
  return <Copiable textToCopy={addr}>{truncateLongString(addr, maxLength)}</Copiable>;
}

export function truncateLongString(addr, maxLength = 12) {
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

export function formatContractCall(decodedCall) {
  const argsSeparatedByComma = decodedCall.params.map(p => `${p.name}: ${p.value}`).join(', ');
  return `${decodedCall.name}(${argsSeparatedByComma})`
}

export function normalizeAddress(addr) {
  return ethers.utils.getAddress(isBech32Address(addr) ? fromBech32(addr) : addr);
}

export function addressesEqual(addr1, addr2) {
  return normalizeAddress(addr1) === normalizeAddress(addr2);
}

export function transactionExplorerLink(hash, blockchain) {
  if (blockchain !== 'Harmony') {
    throw new Error(`Blockchain ${blockchain} not supported`);
  }
  return `https://explorer.harmony.one/tx/${hash}`;
}

export function TransactionExplorer(props) {
  return (
    <a href={transactionExplorerLink(props.hash, props.blockchain)}>
      {props.display || truncateLongString(props.hash)}
    </a>
  );
}

export function AddressExplorer(props) {
  if (props.blockchain !== 'Harmony') {
    throw new Error(`Blockchain ${props.blockchain} not supported`);
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={`https://explorer.harmony.one/address/${props.hash}`}>
      {props.display || truncateLongString(props.hash)}
    </a>
  );
}
