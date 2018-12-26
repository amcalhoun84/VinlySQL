import React from 'react';
export function PastaNote(props) {
  return (
    <p>Pasta is a wondefully diverse food. The sauce it is cooked with often determines the pairing. These are the more common suggestions for <em>all</em> pastas, but a safe recommendation is to go with a white wine for cream and citrus/light sauces and red wine for red sauces.</p>
  );
};

export function DairyNote(props) {
  return (
    <p>Dairy in this case refers to yogurt dishes or dishes where cream or milk are a forefront element, regardless of the animal origin. Dairy can be quite hard to pair, but it can be done.</p>
  );
};

export function EggNote(props) {
  return (
    <p>Eggs are massively versatile. While generally savory, egg dishes can also be sweet. Whites go best, but salty or meat-heavy savory crepes and omeletes will pair well with middle bodied red wines. Chardonnay is acceptable as long as it is <em>NOT</em> oaky.</p>
  );
};

export function RedMeatNote(props) {
  return (
    <p>Red Meat covers a wide variety of meats, not just beef. Almost all red meat pairings are red wine. Though ham is considered a 'pork' product, it is better paired with wines that compliment red meat, and other meats such as a lamb/mutton, bison, buffalo, game meats, etc. can all be considered red meats. Some have more specific pairings, but the following are generally good bets.</p>
  );
};

export function FungiNote(props) {
  return (
    <p>Fungi is a funny food. It is like a vegetable, but often is paired best with a red wine. Not always the case, but due to the high protein, often chewy nature of many popular mushrooms, they pair very well with medium bodied red wines. Due to its versatility, fungi often pair well with red, white, and sparkling wines.</p>
  );
};

export function FoodNote(props) {
  //console.log(props);
  let currFood = props.currFood;
  console.log("Current Food", currFood);
  if (currFood === 'Pasta') {
    return <PastaNote />
  }
  else if (currFood === 'Dairy') {
    return <DairyNote />
  }
  else if (currFood === 'Egg') {
    return <EggNote />
  } else if (currFood === 'Red Meat') {
    return <RedMeatNote />
  } else if (currFood === 'Fungi') {
    return <FungiNote />
  }
  else {
    return <p>ALPHA DEBUG ONLY: A fun food note!</p>
  }
};
