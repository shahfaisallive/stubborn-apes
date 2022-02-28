// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract StubbornApe is ERC721Enumerable, Ownable {
    using Strings for uint256;
    using SafeMath for uint256;

    string public baseURI;

    // Costs ====================================
    uint256 public presaleCost = 0.02 ether;
    uint256 public publicSaleCost = 0.08 ether;

    // Sale dates ===============================
    uint256 public presaleStartTimestamp = 1649959200; // 14 April 2022 5 PM EST
    uint256 public publicSaleStartTimestamp = 1650114000; // 16 April 2022 12 PM EST

    // Count values =============================
    uint256 public MAX_ITEMS = 7000;
    uint256 public _mintedItems = 0;
    uint256 public maxMintAmount = 10; // Max items per tx

    bool public paused = false;
    string public notRevealedUri;
    bool public revealed = false;

    // Lists ====================================
    mapping(address => bool) public whitelisted;
    mapping(address => uint256) public presaleWallets;

    // Events ===================================
    event PublicSaleMint(address indexed _from, uint256 indexed _tokenId);

    constructor() ERC721("Stubborn Apes", "STUBS") {
        setBaseURI(
            "https://gateway.pinata.cloud/ipfs/QmWYUdDwvm2dTpNRU1kbyHizVmZyg9eGpW9W51HbTwD2XK/"
        );
        setNotRevealedURI(
            "https://gateway.pinata.cloud/ipfs/QmT3BqqHE3TmZDp76EtX4WbdHhwE4HgRmYntzzbmGGuJhg"
        );
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }

    // Presale Minting ============================
    function presaleMint() public payable {
        require(!paused, "Contract is paused!");
        require(
            block.timestamp >= presaleStartTimestamp,
            "Presale time is not active yet"
        );
        require(
            block.timestamp <= publicSaleStartTimestamp,
            "Current period is not within public time"
        );
        uint256 remainder = msg.value % presaleCost;
        uint256 _mintAmount = msg.value / presaleCost;
        require(remainder == 0, "Send a divisible amount of price");
        require(
            _mintedItems.add(_mintAmount) <= MAX_ITEMS,
            "Purchase would exceed max supply"
        );
        require(_mintAmount <= maxMintAmount, "Over the maxMintAmount");
        require(whitelisted[msg.sender] == true, "You need to be in whitelist");
        require(presaleWallets[msg.sender] <= 10, "Max 10 items per wallet");

        if (msg.sender != owner()) {
            for (uint256 i = 0; i < _mintAmount; i++) {
                uint256 mintIndex = _mintedItems + 1;
                require(_mintedItems < MAX_ITEMS, "All items sold!");
                _safeMint(msg.sender, mintIndex);
                _mintedItems++;
            }
            presaleUser(msg.sender, presaleWallets[msg.sender] + _mintAmount);
        }
    }

    // Public sale Minting =================================
    function publicSaleMint() public payable {
        require(!paused, "Contract is paused");
        require(
            block.timestamp >= publicSaleStartTimestamp,
            "Public sale time is not active yet"
        );
        uint256 remainder = msg.value % publicSaleCost;
        uint256 _mintAmount = msg.value / publicSaleCost;
        require(remainder == 0, "Send a divisible amount of price");
        require(
            _mintedItems.add(_mintAmount) <= MAX_ITEMS,
            "Purchase would exceed max supply"
        );
        require(_mintAmount <= maxMintAmount, "Over the maxMintAmount");

        if (msg.sender != owner()) {
            for (uint256 i = 0; i < _mintAmount; i++) {
                uint256 mintIndex = _mintedItems + 1;
                require(_mintedItems < MAX_ITEMS, "All items sold!");
                _safeMint(msg.sender, mintIndex);
                emit PublicSaleMint(msg.sender, mintIndex);
                _mintedItems++;
            }
        }
    }

    // Admin Minting (Mint by owner) =========================
    function ownerMint(uint256 _mintAmount) public payable onlyOwner {
        require(!paused, "Contract is paused");
        require(
            _mintedItems.add(_mintAmount) <= MAX_ITEMS,
            "Purchase would exceed max supply"
        );
        require(_mintAmount <= maxMintAmount, "Over the maxMintAmount");

        for (uint256 i = 0; i < _mintAmount; i++) {
            uint256 mintIndex = _mintedItems + 1;
            require(_mintedItems < MAX_ITEMS, "All items sold!");
            _safeMint(msg.sender, mintIndex);
            _mintedItems++;
        }
    }

    // Get MetaData TokenURI =======================
    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        if (revealed == false) {
            return notRevealedUri;
        }

        string memory currentBaseURI = _baseURI();
        return
            bytes(currentBaseURI).length > 0
                ? string(
                    abi.encodePacked(
                        currentBaseURI,
                        tokenId.toString(),
                        ".json"
                    )
                )
                : "";
    }

    // Reveal Metadata of Tokens =======================
    function reveal(bool _state) public onlyOwner {
        revealed = _state;
    }

    // Set Placeholder metadata URI =======================
    function setNotRevealedURI(string memory _notRevealedURI) public {
        notRevealedUri = _notRevealedURI;
    }

    // Set Presale timestamp, (input: timestamp in UTC) =======================
    function setPresaleStartTimestamp(uint256 _startTimestamp)
        external
        onlyOwner
    {
        presaleStartTimestamp = _startTimestamp;
    }

    // Set public timestamp (input: timestamp in UTC) =======================
    function setPublicSaleStartTimestamp(uint256 _startTimestamp)
        external
        onlyOwner
    {
        publicSaleStartTimestamp = _startTimestamp;
    }

    // Set Presale cost for token in ether =======================
    function setPresaleCost(uint256 _newCost) public onlyOwner {
        presaleCost = _newCost;
    }

    // Set public sale cost for token in ether =======================
    function setPublicSaleCost(uint256 _newCost) public onlyOwner {
        publicSaleCost = _newCost;
    }

    // Set max mint limit for single transaction at a time =======================
    function setMaxMintAmount(uint256 _maxItemsPerTx) public onlyOwner {
        maxMintAmount = _maxItemsPerTx;
    }

    // Set base URI of metadata (an IPFS URL) =======================
    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    // Pause the contract which will stop minting process =======================
    function pause(bool _state) public onlyOwner {
        paused = _state;
    }

    // Add a whitelist user who can mint in presale  =======================
    function whitelistUser(address _user) public onlyOwner {
        whitelisted[_user] = true;
    }

    // Remove a whitelist user from current whitelist list =======================
    function removeWhitelistUser(address _user) public onlyOwner {
        whitelisted[_user] = false;
    }

    // Add a presale user =======================
    function presaleUser(address _user, uint256 _amount) internal {
        presaleWallets[_user] = _amount;
    }

    // Get number of tokens minted by a particular address =======================
    function getMintedCountByPresaledUser(address _user)
        public
        view
        virtual
        returns (uint256)
    {
        return presaleWallets[_user];
    }

    // Remove a presale user from wallet =======================
    function removePresaleUser(address _user, uint256 _amount)
        external
        onlyOwner
    {
        presaleWallets[_user] = _amount;
    }

    // Withdraw the balance from samrt contract =======================
    function withdraw() external onlyOwner {
        (bool success, ) = owner().call{value: address(this).balance}("");
        require(success, "Failed to withdraw");
    }
}
