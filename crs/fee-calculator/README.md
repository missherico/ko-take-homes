# Fee Calculator Take Home

## Part 1 -- Fees

The file fees.json describes fees that are applied to different types of items in an order. Each type of item in a order can have one or more fees associated with. The total cost for the order item is the aggregate of all of fees associated with that item. There are different types of fees. Flat fees are simple a single charge. Per-page fees add an additional fee on top of a flat fee for each page after the first.

**Challenge**: Write Javascript that outputs the prices for each order item and order in the orders.json file based on the fees in the fees.json file.

The output should be of the form:

```plain
Order id: <order number>
   Order item <n>: $<price>
   ..
   ..

   Order total: <total>
```

## Part 2 -- Distributions

Each fee has a set of funds associated with it. The money associated with each fee is split among the funds based on the amount specified in the distribution. Any extra money associated with the order that isn't allocated to a fund should be assigned to a generic "Other" fund.

**Challenge**: Write Javascript that outputs the fund distributions for each order in the orders.json file, and then the totals in each fund after processing all orders.

The output should be of the form:

```plain
Order id: <order number>
  Fund: <fund_n>: $<amount>
  ..
  ..

Order id: <order number>
  ..
  ..
  ..

Total distributions:
  Fund: <fund_n>: $<amount>
  ..
  ..
```

## Part 3 -- API

**Challenge**: Create a RESTful API using whatever server-side framework you want (or no framework). The API should 2 have endpoints. One endpoint should take an array of orders and return the prices for each order item and the total for the order. The second endpoint should take an array of orders and return the distribution totals for that order.
