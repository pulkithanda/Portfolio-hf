const mydata = JSON.parse(data);

$(".click").click((e) => {
  localStorage.setItem('id', e.target.id[1]);
})
var id = localStorage.getItem("id");
if (id !== null) {
  $('#blog-title').text(mydata[id].title);
  $('#blog-content').html(mydata[id].content);
  $('#blog-img').html('<img src="' + mydata[id].img + '"class="img-fluid" alt="Blog image" />')
}