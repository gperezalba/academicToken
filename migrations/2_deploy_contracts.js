var ClaimHolderUNIR = artifacts.require("./ClaimHolderUnir.sol");
var ClaimHolderAlumno = artifacts.require("./ClaimHolderAlumno.sol");
var ClaimVerifierA = artifacts.require("./ClaimVerifier.sol");
var Trust = artifacts.require("./Trust.sol");

module.exports = function(deployer) {
  deployer.deploy(ClaimHolderAlumno, {from: '0xe092b1fa25df5786d151246e492eed3d15ea4daa'});
  deployer.deploy(ClaimHolderUNIR, {from: '0xc0d8f541ab8b71f20c10261818f2f401e8194049'}).then(function() {
    return deployer.deploy(Trust, {from: '0x75c4fb2e81a6d3420125f5145182f528d1699146'})
  }).then(function() {
    return deployer.deploy(ClaimVerifierA, ClaimHolderUNIR.address, Trust.address, {from: '0xf1f8ef6b4d4ba31079e2263ec85c03fd5a0802bf'});
  });
};
