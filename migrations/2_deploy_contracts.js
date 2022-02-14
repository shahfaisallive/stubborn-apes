const StubbornApe = artifacts.require("StubbornApe");

module.exports = async function(deployer) {
  await deployer.deploy(StubbornApe);
};
