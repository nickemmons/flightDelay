module.exports = {
    networks: {
        mainnet: {
            network_id: 1, // Ethereum public network
            host: 'localhost',
            port: 8545,
            from: '', // 0 - deployer
            unlock: [
                '', // 1 - new owner & FD.Owner
                '', // 2 - FD.Funder
                '', // 3 - FD.CustomersAdmin
            ], // to unlock in parity
            addressResolver: '',
            funder: '', // multisig
            gas: 6700000,
        },
        kovan: {
            network_id: 42, // custom private network
            host: 'localhost',
            port: 8545,
            from: '0x1885bf0a04c6948061007cb556935a903b1bed95', // 0 - deployer
            unlock: [
                '0x189a99226ad233df825cc1f9d48c8afba529b803', // 1 - new owner & FD.Owner
                '0x1d45c059e511241a5c1b3081e56302a59621c94c', // 2 - FD.Funder
                '0x5226d6ce4d0b84ec9f8214ee4f5883738dad130e', // 3 - FD.CustomersAdmin
                '0x6e5dc1285a441627c0046604586b081bbe41fbc8', // 4 - FD.Emeregency
                '0x79e3c795890175180c492b66b69f0d35ff031de4', // 5 - Customer
                '0xa3a645c963ca4c03328afbd9a79f45716b492231', // 6 - Bridge deployer
                '0xc3878b8566f5626fb8d6ad43b647e3405668f20b', // 7 - Test 1
                '0xc95efc83de5832510dac2c29198279eb8662d77e', // 8 - Test 2
            ], // to unlock in parity
            addressResolver: '0x48fbda035c53d7d4e7a0ac8adc1fd88e541e7336',
            funder: '0x74c90c06e20113c9e628f9ce374611db28da1f93', // multisig
            gas: 6700000,
        },
        development: {
            // host: 'docker.for.mac.localhost',
            host: 'localhost',
            port: 9545,
            network_id: '*',
        },
    },
};
