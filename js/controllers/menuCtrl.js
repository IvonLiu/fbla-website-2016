app.controller('MenuCtrl', [
  '$scope',
  'utils',
  '$state',
  function($scope, utils, $state) {
    $state.go('.food');
  }
]);

app.controller('FoodMenuCtrl', [
  '$scope',
  'utils',
  '$state',
  function($scope, utils, $state) {
    $scope.menu = [{
      name: 'Chili Chicken',
      description: 'tempura style, cool cucumbers, chili sauce',
      price: 12
    }, {
      name: 'Calamari Fritti',
      description: 'tempura vegetables, spicy aioli*',
      price: 13
    }, {
      name: 'Japanese Gyoza',
      description: 'pork dumplings with hot mustard',
      price: 12
    }, {
      name: 'Lettuce Wraps',
      description: 'toasted peanuts, crispy noodles, fresh cilantro + chicken or shrimp',
      price: 12.5
    }, {
      name: 'Pesto Shrimp Flatbreat',
      description: 'whole milk mozzarella, sundried tomatoes, chipotle aioli',
      price: 14.5
    }, {
      name: 'Tandoori Chicken Flatbread',
      description: 'chutney, red onion, cilantro, yogurt',
      price: 14.5
    }, {
      name: 'Hot Wings',
      description: 'Frank\'s hot sauce, creamy blue cheese dip',
      price: 12
    }, {
      name: 'Yam Fries',
      description: 'grated Grana Padano, truffle lemon aioli',
      price: 8.5
    }, {
      name: 'Caesar Starter',
      description: '+ chicken $4',
      price: 7
    }, {
      name: 'House Salad Starter',
      description: '+ chicken $4',
      price: 7
    }];
  }
])

app.controller('DrinksMenuCtrl', [
  '$scope',
  'utils',
  '$state',
  function($scope, utils, $state) {
    $scope.menu = [{
      name: 'Spa Cosmo Martini',
      description: 'Vodka, fresh muddled cucumber, cranberry juice, fresh squeezed lime juice',
      price: 9
    }, {
      name: 'Classic Mojito',
      description: 'Appleton White rum, mint, lime, soda water',
      price: 9.5
    }, {
      name: 'Elderflower Collins',
      description: 'gin, elderflower, fresh squeezed grapefruit',
      price: 8
    }, {
      name: 'Summer Sangria',
      description: 'Red wine, white wine, Spanish brandy, fruit juices, fresh fruit',
      price: 8
    }, {
      name: 'Passionfruit Margarita',
      description: 'Passionfruit, mango, El Jimador tequila, fresh squeezed lime, egg whites',
      price: 8
    }, {
      name: 'Primm\'s Cup',
      description: 'Primm\'s No.1, ginger ale, fresh lemon-lime slush, cucumber',
      price: 8.5
    }, {
      name: 'Stiff Lemonade',
      description: 'Pearl vodka, fresh lemon-lime slush, lemoncello liqueur',
      price: 7
    }, {
      name: 'Real Peach Bellini',
      description: 'Appleton V/X rum, real peach molasses, sparkling wine, and red sangria',
      price: 7.5
    }, {
      name: 'Super Sonic Gin & Tonic',
      description: 'Gorgons gin, tonic, fresh lemon-lime slush',
      price: 8.5
    }, {
      name: 'Super Stoked Vodka Coke',
      description: 'Smirnoff cherry or vanilla vodka, Coca Cola, fresh lemon-lime slush',
      price: 8.5
    }];
  }
]);
