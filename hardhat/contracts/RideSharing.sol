//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract RideSharing {

  struct Rider {
    string name;
    uint phoneNumber;
    bool available;
    uint latestStars;
    uint averageStars;
    string location;
    bool isRider;
    // add photo maybe
  }

  mapping(address => Rider) public riders;
  mapping(address => address) public currentRides;

  address[] public riderAddresses;


  event RideConfirmation(address indexed customer,address indexed rider);

  modifier onlyRider() {
    require(riders[msg.sender].isRider,"Not rider");
    _;
  }

  function registerRider(string calldata _name,uint _phoneNumber,string calldata _location) public {
    riders[msg.sender] = Rider(_name,_phoneNumber,true,0,0,_location,true);
    riderAddresses.push(msg.sender);
  }

  function giveStars(address _raddress,uint _stars) public payable {
    require(_stars <= 5, "Stars can't be greater than 5");
    require(!(riders[msg.sender].isRider && msg.sender == _raddress),"Rider can't give the stars");
    riders[_raddress].latestStars = _stars;
  }

  function setAvailability(bool _avail) public onlyRider{
    riders[msg.sender].available = _avail;
  }

  function confirmRide(address _raddress) public payable {
    currentRides[msg.sender] = _raddress;
    riders[_raddress].available = false;
    // send notification to the rider using moralis to riders phone number
    emit RideConfirmation(msg.sender, _raddress);
  }

  function getAvailableRiders() public view returns (Rider[] memory){
    Rider[] memory availableRiders;
    uint j;

    for (uint256 i = 0; i < riderAddresses.length; ++i) {
      if(riders[riderAddresses[i]].available){
        availableRiders[j++] = riders[riderAddresses[i]];
      }
    }

    return availableRiders;
  }

}
