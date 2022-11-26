var PEOPLE = 0
var GROUPS = 0

$("#in").on("propertychange input", function (e) {
  if (isNaN(this.value) || this.value == "") {
    $(this).val("")
  } else {
    if (this.value > 99) {
      $(this).val($(this).val().substr(0, 2))
    }
    PEOPLE = parseInt(this.value)
    main()
  }
})

$("#groups").on("propertychange input", function (e) {
  if (isNaN(this.value) || this.value == "") {
    $(this).val("")
  } else {
    if (this.value > 99) {
      $(this).val($(this).val().substr(0, 2))
    }
    GROUPS = parseInt(this.value)
    main()
  }
})
