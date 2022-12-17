var GROUPS = 0
var copytext = "";

$("#groups").on("propertychange input", function (e) {
  if (isNaN(this.value) || this.value == "") {
    $(this).val("")
  } else {
    if (this.value > 99) {
      $(this).val($(this).val().substr(0, 2))
    }
    GROUPS = parseInt(this.value)
    // main()
  }
})

$("#gen").on("click", function (e) {
  if (GROUPS == 0) {
    return;
  }
  $("#list").empty()
  let people = []
  for (var i = 0; i < GROUPS; i++) {
    people.push([])
  }
  let names = $("#names").val().split("\n")
  names = names.filter(function (value, index, arr) {
    return value != ""
  })
  shuff(names)
  let x = 0
  let y = 0
  while (y < names.length) {
    people[x].push(names[y])
    y++
    x = (x + 1) % GROUPS
  }
  var txt = "";
  for (let i = 0; i < people.length; i++) {
    $("#list").append("<li>" + people[i].join(", ") + "</li>")
    txt += people[i].join(", ") + "\n";
  }
  copytext = txt;
  console.log(copytext);
})

function shuff(array) {
  array.sort(() => Math.random() - 0.5)
}

$(document).keypress(function (event) {
  var keycode = event.keyCode ? event.keyCode : event.which
  if (keycode == "13") {
    $("#gen").click()
  }
})

function copyContent() {
  navigator.clipboard.writeText(copytext);
}
