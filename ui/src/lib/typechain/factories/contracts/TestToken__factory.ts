/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { TestToken, TestTokenInterface } from "../../contracts/TestToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051806040016040528060098152602001682a32b9ba2a37b5b2b760b91b815250604051806040016040528060038152602001621514d560ea1b815250816003908162000061919062000120565b50600462000070828262000120565b505050620001ec565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620000a457607f821691505b602082108103620000c557634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200011b576000816000526020600020601f850160051c81016020861015620000f65750805b601f850160051c820191505b81811015620001175782815560010162000102565b5050505b505050565b81516001600160401b038111156200013c576200013c62000079565b62000154816200014d84546200008f565b84620000cb565b602080601f8311600181146200018c5760008415620001735750858301515b600019600386901b1c1916600185901b17855562000117565b600085815260208120601f198616915b82811015620001bd578886015182559484019460019091019084016200019c565b5085821015620001dc5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610a3c80620001fc6000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c806340c10f1911610081578063a457c2d71161005b578063a457c2d7146101a7578063a9059cbb146101ba578063dd62ed3e146101cd57600080fd5b806340c10f191461016157806370a082311461017657806395d89b411461019f57600080fd5b806323b872dd116100b257806323b872dd1461012c578063313ce5671461013f578063395093511461014e57600080fd5b806306fdde03146100d9578063095ea7b3146100f757806318160ddd1461011a575b600080fd5b6100e1610206565b6040516100ee9190610885565b60405180910390f35b61010a6101053660046108f0565b610298565b60405190151581526020016100ee565b6002545b6040519081526020016100ee565b61010a61013a36600461091a565b6102b2565b604051601281526020016100ee565b61010a61015c3660046108f0565b6102d6565b61017461016f3660046108f0565b610315565b005b61011e610184366004610956565b6001600160a01b031660009081526020819052604090205490565b6100e1610323565b61010a6101b53660046108f0565b610332565b61010a6101c83660046108f0565b6103e1565b61011e6101db366004610978565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b606060038054610215906109ab565b80601f0160208091040260200160405190810160405280929190818152602001828054610241906109ab565b801561028e5780601f106102635761010080835404028352916020019161028e565b820191906000526020600020905b81548152906001019060200180831161027157829003601f168201915b5050505050905090565b6000336102a68185856103ef565b60019150505b92915050565b6000336102c0858285610547565b6102cb8585856105d9565b506001949350505050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102a690829086906103109087906109e5565b6103ef565b61031f82826107c6565b5050565b606060048054610215906109ab565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156103d45760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6102cb82868684036103ef565b6000336102a68185856105d9565b6001600160a01b03831661046a5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016103cb565b6001600160a01b0382166104e65760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016103cb565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146105d357818110156105c65760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103cb565b6105d384848484036103ef565b50505050565b6001600160a01b0383166106555760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016103cb565b6001600160a01b0382166106d15760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016103cb565b6001600160a01b038316600090815260208190526040902054818110156107605760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016103cb565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a36105d3565b6001600160a01b03821661081c5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103cb565b806002600082825461082e91906109e5565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b60006020808352835180602085015260005b818110156108b357858101830151858201604001528201610897565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b03811681146108eb57600080fd5b919050565b6000806040838503121561090357600080fd5b61090c836108d4565b946020939093013593505050565b60008060006060848603121561092f57600080fd5b610938846108d4565b9250610946602085016108d4565b9150604084013590509250925092565b60006020828403121561096857600080fd5b610971826108d4565b9392505050565b6000806040838503121561098b57600080fd5b610994836108d4565b91506109a2602084016108d4565b90509250929050565b600181811c908216806109bf57607f821691505b6020821081036109df57634e487b7160e01b600052602260045260246000fd5b50919050565b808201808211156102ac57634e487b7160e01b600052601160045260246000fdfea26469706673582212208064f7b74d3e03f51a8a66a2fda4fb7f8f3c0fb9698b4b40fd3541a73d14ae1264736f6c63430008170033";

type TestTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestToken__factory extends ContractFactory {
  constructor(...args: TestTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      TestToken & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TestToken__factory {
    return super.connect(runner) as TestToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestTokenInterface {
    return new Interface(_abi) as TestTokenInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): TestToken {
    return new Contract(address, _abi, runner) as unknown as TestToken;
  }
}
