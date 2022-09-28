/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  JungleMoveVerifier,
  JungleMoveVerifierInterface,
} from "../JungleMoveVerifier";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[8]",
        name: "proofData",
        type: "uint256[8]",
      },
      {
        internalType: "uint256[3]",
        name: "input",
        type: "uint256[3]",
      },
    ],
    name: "verifyProof",
    outputs: [
      {
        internalType: "bool",
        name: "r",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611a29806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806365c0325914610030575b600080fd5b61004a600480360381019061004591906114f7565b610060565b6040516100579190611554565b60405180910390f35b600061006a611178565b6040518060400160405280856000600881106100895761008861156f565b5b60200201518152602001856001600881106100a7576100a661156f565b5b6020020151815250816000018190525060405180604001604052806040518060400160405280876002600881106100e1576100e061156f565b5b60200201518152602001876003600881106100ff576100fe61156f565b5b6020020151815250815260200160405180604001604052808760046008811061012b5761012a61156f565b5b60200201518152602001876005600881106101495761014861156f565b5b6020020151815250815250816020018190525060405180604001604052808560066008811061017b5761017a61156f565b5b60200201518152602001856007600881106101995761019861156f565b5b602002015181525081604001819052506000600367ffffffffffffffff8111156101c6576101c56112df565b5b6040519080825280602002602001820160405280156101f45781602001602082028036833780820191505090505b50905060005b600381101561024d578481600381106102165761021561156f565b5b602002015182828151811061022e5761022d61156f565b5b6020026020010181815250508080610245906115cd565b9150506101fa565b50600061025a8284610278565b141561026b57600192505050610272565b6000925050505b92915050565b6000807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001905060006102a861046b565b9050806080015151600186516102be9190611616565b146102fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f5906116c9565b60405180910390fd5b60006040518060400160405280600081526020016000815250905060005b86518110156103ed57838782815181106103395761033861156f565b5b602002602001015110610381576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037890611735565b60405180910390fd5b6103d8826103d3856080015160018561039a9190611616565b815181106103ab576103aa61156f565b5b60200260200101518a85815181106103c6576103c561156f565b5b602002602001015161095f565b610a3c565b915080806103e5906115cd565b91505061031c565b5061041781836080015160008151811061040a5761040961156f565b5b6020026020010151610a3c565b905061044d6104298660000151610b3f565b8660200151846000015185602001518587604001518b604001518960600151610be4565b61045d5760019350505050610465565b600093505050505b92915050565b6104736111ab565b60405180604001604052807f01c894ce69809bc23d3e39617a7f183489cb69dc6e8ce3f7563e0b231a6379b981526020017f02e0a2b474320df2a72c38a996dd2bffe1ef3ada6ea4291f81b3dfa7e1b99f1e8152508160000181905250604051806040016040528060405180604001604052807f0f2162a01c0cab5dfd7e4db0ee0f7b31af04df3fdab24739604cc49a8db94a9381526020017f22ada1101662fb80dc69d7365d7e7bbe7497f47ab1533670f4a9b7841c0451df815250815260200160405180604001604052807f07f605c663564b206105ee9363707fd873e53319bedff6dbd59620592c4299d581526020017f0c82b09bd82bfb2efe3ad27cadca6d785f5df4067e9199ff704d3793c86e46a68152508152508160200181905250604051806040016040528060405180604001604052807f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c281526020017f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed815250815260200160405180604001604052807f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81526020017f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa8152508152508160400181905250604051806040016040528060405180604001604052807f1c777b9e2ecc646ab39985941d0ccca14ff42a34de50145d12efdc54f93ec58681526020017f1b549239ffe8dace347a62ff25bfc1a1519f8311af96d51a9864ba90338ae0ed815250815260200160405180604001604052807f1ef5b55fdae7d781e1cdcd81294ff0e06a9bdad3cc94fef1dba33a4d93eb969d81526020017f2b38110f442dfb1881cac60aeed61da702b6720c7c946aa8d56dd5a294e9493f8152508152508160600181905250600467ffffffffffffffff81111561073a576107396112df565b5b60405190808252806020026020018201604052801561077357816020015b6107606111f2565b8152602001906001900390816107585790505b50816080018190525060405180604001604052807f23b1b2529623cfd7569cb530dd36bd5b94e261c30008edce6e9fd4c98e838f2b81526020017f09f9e4af3b9c7c9d1c2052ae891ece392513d4f81885bf464efb2cac0f5c7edb81525081608001516000815181106107e9576107e861156f565b5b602002602001018190525060405180604001604052807f078d644da5ac7ef9be9cd69a2783a89297daf4f88a3c0ebf1f76e7935acd59ad81526020017f0d0a91c541f491b3fe177aa1fa86cc856c1c68ca18faefcb47a9cf1f350acb8181525081608001516001815181106108615761086061156f565b5b602002602001018190525060405180604001604052807f0d86522165fe777015dbf21cc1f1374a626248fd8753065e1164a0f4d00300f581526020017f26b852a12544af1be08cde14d7e12282c3fe4f8aad86c8da4e6083997543baf081525081608001516002815181106108d9576108d861156f565b5b602002602001018190525060405180604001604052807f2ca99207836465f28d6fdc575eb7a4177cb98b5f08d38ce25561affe4c312c0981526020017f02b07d5981f26bb8439635e0e3ab586f74dbc1ddce0762e25dd9bef9cc08415181525081608001516003815181106109515761095061156f565b5b602002602001018190525090565b6109676111f2565b61096f61120c565b8360000151816000600381106109885761098761156f565b5b6020020181815250508360200151816001600381106109aa576109a961156f565b5b60200201818152505082816002600381106109c8576109c761156f565b5b602002018181525050600060608360808460076107d05a03fa905080600081146109f1576109f3565bfe5b5080610a34576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2b906117a1565b60405180910390fd5b505092915050565b610a446111f2565b610a4c61122e565b836000015181600060048110610a6557610a6461156f565b5b602002018181525050836020015181600160048110610a8757610a8661156f565b5b602002018181525050826000015181600260048110610aa957610aa861156f565b5b602002018181525050826020015181600360048110610acb57610aca61156f565b5b602002018181525050600060608360c08460066107d05a03fa90508060008114610af457610af6565bfe5b5080610b37576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b2e9061180d565b60405180910390fd5b505092915050565b610b476111f2565b60007f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47905060008360000151148015610b84575060008360200151145b15610ba8576040518060400160405280600081526020016000815250915050610bdf565b604051806040016040528084600001518152602001828560200151610bcd919061185c565b83610bd8919061188d565b8152509150505b919050565b600080600467ffffffffffffffff811115610c0257610c016112df565b5b604051908082528060200260200182016040528015610c3b57816020015b610c286111f2565b815260200190600190039081610c205790505b5090506000600467ffffffffffffffff811115610c5b57610c5a6112df565b5b604051908082528060200260200182016040528015610c9457816020015b610c81611250565b815260200190600190039081610c795790505b5090508a82600081518110610cac57610cab61156f565b5b60200260200101819052508882600181518110610ccc57610ccb61156f565b5b60200260200101819052508682600281518110610cec57610ceb61156f565b5b60200260200101819052508482600381518110610d0c57610d0b61156f565b5b60200260200101819052508981600081518110610d2c57610d2b61156f565b5b60200260200101819052508781600181518110610d4c57610d4b61156f565b5b60200260200101819052508581600281518110610d6c57610d6b61156f565b5b60200260200101819052508381600381518110610d8c57610d8b61156f565b5b6020026020010181905250610da18282610db1565b9250505098975050505050505050565b60008151835114610df7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dee9061190d565b60405180910390fd5b6000835190506000600682610e0c919061192d565b905060008167ffffffffffffffff811115610e2a57610e296112df565b5b604051908082528060200260200182016040528015610e585781602001602082028036833780820191505090505b50905060005b838110156110dd57868181518110610e7957610e7861156f565b5b602002602001015160000151826000600684610e95919061192d565b610e9f9190611616565b81518110610eb057610eaf61156f565b5b602002602001018181525050868181518110610ecf57610ece61156f565b5b602002602001015160200151826001600684610eeb919061192d565b610ef59190611616565b81518110610f0657610f0561156f565b5b602002602001018181525050858181518110610f2557610f2461156f565b5b602002602001015160000151600060028110610f4457610f4361156f565b5b6020020151826002600684610f59919061192d565b610f639190611616565b81518110610f7457610f7361156f565b5b602002602001018181525050858181518110610f9357610f9261156f565b5b602002602001015160000151600160028110610fb257610fb161156f565b5b6020020151826003600684610fc7919061192d565b610fd19190611616565b81518110610fe257610fe161156f565b5b6020026020010181815250508581815181106110015761100061156f565b5b6020026020010151602001516000600281106110205761101f61156f565b5b6020020151826004600684611035919061192d565b61103f9190611616565b815181106110505761104f61156f565b5b60200260200101818152505085818151811061106f5761106e61156f565b5b60200260200101516020015160016002811061108e5761108d61156f565b5b60200201518260056006846110a3919061192d565b6110ad9190611616565b815181106110be576110bd61156f565b5b60200260200101818152505080806110d5906115cd565b915050610e5e565b506110e6611276565b6000602082602086026020860160086107d05a03fa9050806000811461110b5761110d565bfe5b508061114e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611145906119d3565b60405180910390fd5b6000826000600181106111645761116361156f565b5b602002015114159550505050505092915050565b604051806060016040528061118b6111f2565b8152602001611198611250565b81526020016111a56111f2565b81525090565b6040518060a001604052806111be6111f2565b81526020016111cb611250565b81526020016111d8611250565b81526020016111e5611250565b8152602001606081525090565b604051806040016040528060008152602001600081525090565b6040518060600160405280600390602082028036833780820191505090505090565b6040518060800160405280600490602082028036833780820191505090505090565b6040518060400160405280611263611298565b8152602001611270611298565b81525090565b6040518060200160405280600190602082028036833780820191505090505090565b6040518060400160405280600290602082028036833780820191505090505090565b6000604051905090565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611317826112ce565b810181811067ffffffffffffffff82111715611336576113356112df565b5b80604052505050565b60006113496112ba565b9050611355828261130e565b919050565b600067ffffffffffffffff821115611375576113746112df565b5b602082029050919050565b600080fd5b6000819050919050565b61139881611385565b81146113a357600080fd5b50565b6000813590506113b58161138f565b92915050565b60006113ce6113c98461135a565b61133f565b905080602084028301858111156113e8576113e7611380565b5b835b8181101561141157806113fd88826113a6565b8452602084019350506020810190506113ea565b5050509392505050565b600082601f8301126114305761142f6112c9565b5b600861143d8482856113bb565b91505092915050565b600067ffffffffffffffff821115611461576114606112df565b5b602082029050919050565b600061147f61147a84611446565b61133f565b9050806020840283018581111561149957611498611380565b5b835b818110156114c257806114ae88826113a6565b84526020840193505060208101905061149b565b5050509392505050565b600082601f8301126114e1576114e06112c9565b5b60036114ee84828561146c565b91505092915050565b600080610160838503121561150f5761150e6112c4565b5b600061151d8582860161141b565b92505061010061152f858286016114cc565b9150509250929050565b60008115159050919050565b61154e81611539565b82525050565b60006020820190506115696000830184611545565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006115d882611385565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561160b5761160a61159e565b5b600182019050919050565b600061162182611385565b915061162c83611385565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156116615761166061159e565b5b828201905092915050565b600082825260208201905092915050565b7f76657269666965722d6261642d696e7075740000000000000000000000000000600082015250565b60006116b360128361166c565b91506116be8261167d565b602082019050919050565b600060208201905081810360008301526116e2816116a6565b9050919050565b7f76657269666965722d6774652d736e61726b2d7363616c61722d6669656c6400600082015250565b600061171f601f8361166c565b915061172a826116e9565b602082019050919050565b6000602082019050818103600083015261174e81611712565b9050919050565b7f70616972696e672d6d756c2d6661696c65640000000000000000000000000000600082015250565b600061178b60128361166c565b915061179682611755565b602082019050919050565b600060208201905081810360008301526117ba8161177e565b9050919050565b7f70616972696e672d6164642d6661696c65640000000000000000000000000000600082015250565b60006117f760128361166c565b9150611802826117c1565b602082019050919050565b60006020820190508181036000830152611826816117ea565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061186782611385565b915061187283611385565b9250826118825761188161182d565b5b828206905092915050565b600061189882611385565b91506118a383611385565b9250828210156118b6576118b561159e565b5b828203905092915050565b7f70616972696e672d6c656e677468732d6661696c656400000000000000000000600082015250565b60006118f760168361166c565b9150611902826118c1565b602082019050919050565b60006020820190508181036000830152611926816118ea565b9050919050565b600061193882611385565b915061194383611385565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561197c5761197b61159e565b5b828202905092915050565b7f70616972696e672d6f70636f64652d6661696c65640000000000000000000000600082015250565b60006119bd60158361166c565b91506119c882611987565b602082019050919050565b600060208201905081810360008301526119ec816119b0565b905091905056fea2646970667358221220f7c461b40a83db3bd00091aeec08671abe45827033ce019bae2d09bfbc3b11b864736f6c634300080c0033";

type JungleMoveVerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: JungleMoveVerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class JungleMoveVerifier__factory extends ContractFactory {
  constructor(...args: JungleMoveVerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<JungleMoveVerifier> {
    return super.deploy(overrides || {}) as Promise<JungleMoveVerifier>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): JungleMoveVerifier {
    return super.attach(address) as JungleMoveVerifier;
  }
  override connect(signer: Signer): JungleMoveVerifier__factory {
    return super.connect(signer) as JungleMoveVerifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): JungleMoveVerifierInterface {
    return new utils.Interface(_abi) as JungleMoveVerifierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): JungleMoveVerifier {
    return new Contract(address, _abi, signerOrProvider) as JungleMoveVerifier;
  }
}
