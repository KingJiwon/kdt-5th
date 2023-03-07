// @ts-check

function buySync(item, price, quantity, callback) {
  console.log(`${item} 상품을 ${quantity}개 골라서 점원에게 주셨습니다.`);
  setTimeout(() => {
    console.log('계산이 필요합니다.');
    const total = price * quantity;
    callback(total);
  }, 2000);
}

function pay(tot) {
  console.log(`${tot}원을 지불하였습니다`);
}

const totalmoney = buySync('포켓몬빵', 1000, 5, pay);
