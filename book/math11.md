#####11. After the shopping here comes pizza time! Taissa's oven's depth is 60cm. What's the maximum area of pizza that Taissa can buy? Please give an answer in m² and round to two decimal places.
![](pizza.png)

<small><span class="gray">Hint</span>: Think about pizza's radius!</small>

---

** Your Answer **

<textarea style="border:none;" rows="5" cols="50"></textarea>
---
{% exercise %}
Please write a javascript expression to calculate the pizza's area.
{% initial %}
  var x =
{% solution %}
  var x = Math.PI * Math.pow(0.3, 2);
{% validation %}
  assert(x == Math.PI * Math.pow(0.3, 2));
{% context %}
{% endexercise %}

<div class="answer hidden">
    Answer: 0.3²*3.14 = 0.28m²
</div>

#####11.1 And if there was no oven and you could only use microwave which diameter is of 30cm?

** Your Answer **

<textarea style="border:none;" rows="5" cols="50"></textarea>
---

<div class="answer hidden">
    Answer: 0.15²*3.14 = 0.07m²
</div>

#####11.2 How many times the area of the oven's pizza is bigger than the area of the microwave's pizza? And how many times the first diameter is bigger than the second?
Why does this happen?

** Your Answer **

<textarea style="border:none;" rows="5" cols="50"></textarea>
---

#####11.3 You're in pizzaria choosing pizzas. There are small pizzas of 20cm in diameter, and their price is 5 euros each. There are also big pizzas of 40cm in diameter and it costs 10 euros.
Which one is more wise choice - buying two small pizzas or one big pizza? Or is it the same?

<small><span class="gray">Hint</span>: Think about pizza's areas!</small>

** Your Answer **

<textarea style="border:none;" rows="5" cols="50"></textarea>
---

<div class="answer hidden">
    Answer: the price of one big pizza is the same as of two small pizzas, while the area of big pizza is twice as big as the area of two small pizzas!
</div>

<button class="show-answers">Show Answers!</button>