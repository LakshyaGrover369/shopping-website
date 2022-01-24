



    function AddToCart(a, b, c) {
        // console.log(a,b,c);
        let cardObj ;
        let cards = localStorage.getItem(`cards`);
        let cardDetails = {
          productPrice: a,
          productName: b,
          productImg: c
        };
        localStorage.getItem(`cards`);
        if (cards == null) {
          cardObj=[];
          console.log('cards is null , i am pushing the object in array');
          cardObj.push(cardDetails);
  
        }
        else if (cards !== null) {
          console.log('cards is not null , i am pushing the object in array');
          cardObj=JSON.parse(cards);
          cardObj.push(cardDetails);
          console.log(cardObj);
        }
        localStorage.setItem(`cards`, JSON.stringify(cardObj));
      }