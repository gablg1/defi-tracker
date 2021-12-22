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

function CopiableText(props) {
  const [copied, setCopied] = useState(false);

  const clickToCopy = () => {
    navigator.clipboard.writeText(props.textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };

  return <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{copied ? 'Copied!' : 'Click to copy'}</Tooltip>}>
    <span onClick={clickToCopy} className="d-inline-block" style={{cursor: 'pointer'}}>
      {props.textToDisplay}
    </span>
  </OverlayTrigger>
}

export function truncateLongAddressCopiable(addr, maxLength = 12) {
  return <CopiableText
    textToCopy={addr}
    textToDisplay={truncateLongString(addr, maxLength)}
    />;

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

export function TransactionExplorer(props) {
  if (props.blockchain !== 'Harmony') {
    throw new Error(`Blockchain ${props.blockchain} not supported`);
  }

  return (
    <a href={`https://explorer.harmony.one/tx/${props.hash}`}>
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
