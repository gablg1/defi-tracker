## DFK Balances

DFK Balances is a super customizable and extensible Financial tracker for the DeFi Kingdoms ecosystem. It allows users to easily add their own Contract definitions, Balance rules, and Price Fetchers.

Because smart contracts can be arbitrarily complex, the idea is to allow users to "teach" the app how to query prices and compute balances from the blockchain in arbitrary ways, so DFK Balances "learns" from its users as the DFK ecosystem becomes more complex.

## Defi Tracker
In the long run, we'd like this project to accurately be able to generate accounting and financial reports for any other DeFi project as well. Ever wanted to accurately track how much money you have invested in a certain project, or all of DeFi? That's the dream.

This project is a generic DeFi balance tracker. It allows anyone to create Accounting and Balance rules that operate on
Blockchain transactions and event logs, as
well as historical price fetchers, to generate Accounting and Finance reports for any DeFi ecosystem.

Because DeFi projects can be arbitrarily complex, DeFi Tracker allows you to add specific rules for each type of
new token and contract you're interested in.


## Next Milestones

The most important things we should build next are:
- Allow users to query all transactions that mention an address (instead of only transactions from/to that address).
  When John sends Alice some JEWEL token, John actually sends the transaction to the JEWEL token contract, and not to
  Alice (Alice's wallet goes in the parameters). Right now if you query Alice's wallet, we won't show John's
  transaction, but we should! Doing this will likely require building infra that indexes the blockchain for all
  contracts added to Defi Tracker.
- Allow Price Fetchers to fetch both current and historical prices.
