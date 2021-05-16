
Studying from:

- [Build a Real World ICO](https://www.youtube.com/watch?v=2IqsgSyA8BQ&list=PLS5SEs8ZftgULF-lbxy-is9x_7mTMHFIN)


# Libraries:
- Contract Templates: [OpenZeppelin/openzeppelin-contracts](https://github.com/OpenZeppelin/openzeppelin-contracts)
- Local Netowork: genache-cli
- Integrated Tool: Truffle

# Setup

Install ganache-cli
``` bash
npm install -g ganache-cli
```

Start the local server
``` bash
genache-cli
```

Deploy token
``` bash
truffle migration
```

Play in Console

``` bash
truffle console
```

```
token = await HugoToken.deployed()
(await token.decimals()).toNumber()
(await token.totalSupply()).toNumber()
```

