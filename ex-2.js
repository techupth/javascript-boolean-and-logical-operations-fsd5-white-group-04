// Exercise #2: Promotion Conditions
let lastMonthPaidMoreThan4000 = true;
let isWeekday = true;
let hasBoughtProductFromITCategory = false;
let hasAttendedDiscountEvent = false;
let isPlatinum = true;

let hasPromotion =
  (lastMonthPaidMoreThan4000 &&
    isWeekday &&
    !hasBoughtProductFromITCategory &&
    !hasAttendedDiscountEvent) ||
  isPlatinum;

let john =
  lastMonthPaidMoreThan4000 &&
  isWeekday &&
  !hasBoughtProductFromITCategory &&
  !hasAttendedDiscountEvent;
console.log(hasPromotion);
console.log(john);
