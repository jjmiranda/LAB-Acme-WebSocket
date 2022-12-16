IM_ADDRESS = 0x4E4f55190185f2694D331E5c9Fd70a2B75Eb4Bd2
16bytes = 0x15458ef540ade6068dfe2f44e8fa733c
chainId = 80001 - 0x13881

identity_address_issuer = 0xcEb9EBF54A52EEa7aCdE43061e1d230599d0993A
ifconfig | http://192.168.1.22:8001/api/issuer

mnid.encode({
  network: '0x13881',
  address: '0xcEb9EBF54A52EEa7aCdE43061e1d230599d0993A'
})

did:ev:bmM8apgHQD8cPbwNsMSJKqkYRCDYhkK55uxR9

https://kaytrust.id/share?redirect_uri=http://192.168.1.22:8001/api/issuer/event&title=ACME%20ISSUER&description=Discount%20certificate&client_id=did:ev:bmM8apgHQD8cPbwNsMSJKqkYRCDYhkK55uxR9

privatekey = 73e34030d55b09f8a05259cb72a0240e6a136f4d43e1edad0f5643f38132ac2c

EthCore.prototype.sendTransaction - gas price 80000000000, set chainId

===============================================

docker build . -t jmiranda1996/demo-acme-socket
docker run -p 8002:8002 -d jmiranda1996/demo-acme-socket