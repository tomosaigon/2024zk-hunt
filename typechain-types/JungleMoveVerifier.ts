/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface JungleMoveVerifierInterface extends utils.Interface {
  functions: {
    "verifyProof(uint256[8],uint256[3])": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "verifyProof"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "verifyProof",
    values: [
      PromiseOrValue<BigNumberish>[],
      [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "verifyProof",
    data: BytesLike
  ): Result;

  events: {};
}

export interface JungleMoveVerifier extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: JungleMoveVerifierInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    verifyProof(
      proofData: PromiseOrValue<BigNumberish>[],
      input: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ],
      overrides?: CallOverrides
    ): Promise<[boolean] & { r: boolean }>;
  };

  verifyProof(
    proofData: PromiseOrValue<BigNumberish>[],
    input: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ],
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    verifyProof(
      proofData: PromiseOrValue<BigNumberish>[],
      input: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ],
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    verifyProof(
      proofData: PromiseOrValue<BigNumberish>[],
      input: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    verifyProof(
      proofData: PromiseOrValue<BigNumberish>[],
      input: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
