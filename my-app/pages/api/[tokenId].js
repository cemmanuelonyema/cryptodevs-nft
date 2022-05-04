// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//base URl  + tokenID
//base URl = 
//Token id = 1
export default function handler(req, res) {
  const tokenId = req.query.tokenId;

  const name = `Crypto Dev #${tokenId}`;
  const description = "CryptoDevs is an Nft Collection for web 3 Developers";
  const image = '';

  return res.json({
    name: name,
    description: description,
    image: image,
  });
}
