// generate UUID V5
$('.submit').click(function(e) {
  e.preventDefault();
  //
  var nameSpace = $('.fnamespace').val();
  var name = $('.fname').val();
  //
  var output;
  try {
    output = uuidv5(name, nameSpace);
  } catch (e) {
    output = '<span class="text-danger">' + e.message + '</span>';
  }
  // render output
  $('.output').html(output);
  var trow = '<tr> <td>' + nameSpace + '</td> <td>' + name + '</td> <td>' + output + '</td></tr>'
  $('tbody').append(trow);

  //
}).click();