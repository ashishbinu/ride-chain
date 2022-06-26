const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "customer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "rider",
        type: "address",
      },
    ],
    name: "RideConfirmation",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_raddress",
        type: "address",
      },
    ],
    name: "confirmRide",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "currentRides",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAvailableRiders",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "phoneNumber",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "available",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "latestStars",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "averageStars",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "location",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isRider",
            type: "bool",
          },
        ],
        internalType: "struct RideSharing.Rider[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_raddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_stars",
        type: "uint256",
      },
    ],
    name: "giveStars",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_phoneNumber",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_location",
        type: "string",
      },
    ],
    name: "registerRider",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "riderAddresses",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "riders",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "phoneNumber",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "available",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "latestStars",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "averageStars",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "location",
        type: "string",
      },
      {
        internalType: "bool",
        name: "isRider",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_avail",
        type: "bool",
      },
    ],
    name: "setAvailability",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export default abi;
