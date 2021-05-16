const Migrations = artifacts.require("HugoToken");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
