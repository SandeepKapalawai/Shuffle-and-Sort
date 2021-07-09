let arrayVal = ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  elementWrapper = document.getElementById("list_items"),append;

arrayVal.forEach((item, index) => {
  elementWrapper.innerHTML += "<li data-item=" + item + ">" + item + "</li>";
});

shuffleArray = () => {
  let index = 0;
  arrayVal = arrayVal.sort(() => {
    return 0.5 - Math.random();
  });
  elementWrapper.innerHTML = "";
  while (index < arrayVal.length) {
    let cubeItem = document.createElement("li");
    cubeItem.innerHTML = arrayVal[index];
    cubeItem.setAttribute("data-item", arrayVal[index]);
    elementWrapper.appendChild(cubeItem);
    ++index;
  }
};
sortArray = () => {
  let index = 0;
  arrayVal = arrayVal.sort((a, b) => {
    return a - b;
  });
  elementWrapper.innerHTML = "";
  while (index < arrayVal.length) {
    let cubeItem = document.createElement("li");
    cubeItem.innerHTML = arrayVal[index];
    cubeItem.setAttribute("data-item", arrayVal[index]);
    elementWrapper.appendChild(cubeItem);
    ++index;
  }
};
