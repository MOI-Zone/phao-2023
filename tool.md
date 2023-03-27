
## chay cai nay dau tien
```javascript
javascript: (function () {
   function l(u, i) {
      var d = document;
      if (!d.getElementById(i)) {
         var s = d.createElement('script');
         s.src = u;
         s.id = i;
         d.body.appendChild(s);
      }
   }
   l('//code.jquery.com/jquery-3.2.1.min.js', 'jquery')
})();
```
## xong chay cai nay, doi tam khoang 3p
```javascript
var questions = $('.title').map(function () {
   return $(this).text();
}).get();

var ketqua = [];

function requestQuestion(index) {
  // Nếu đã xử lý hết tất cả câu hỏi, thoát hàm đệ quy
  if (index >= questions.length) {
    console.log(ketqua);
    return;
  }
  
  var currentQuestion = questions[index];
  
  $.ajax({
    url: 'https://api.minhquang.xyz/tracnghiem/' + encodeURIComponent(currentQuestion),
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      var answer = '';
      if (data && data.hoidap247 && data.hoidap247.answer) {
        answer += data.hoidap247.answer;
      }
      answer += ';';
      if (data && data.moon && data.moon.answer) {
        answer += data.moon.answer;
      }
      answer += ';';
      if (data && data.vietjack && data.vietjack.answer) {
        answer += data.vietjack.answer;
      }
      ketqua.push(answer);
      
      // Console log giá trị `ketqua` hiện tại
      console.log(ketqua);
      
      // Gửi request cho câu hỏi tiếp theo
      requestQuestion(index + 1);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      ketqua.push("");
      
      // Console log giá trị `ketqua` hiện tại
      console.log(ketqua);
      
      // Gửi request cho câu hỏi tiếp theo
      requestQuestion(index + 1);
    },
    async: true
  });
}

// Bắt đầu gửi request cho câu hỏi đầu tiên
requestQuestion(0);
```


## xong het thi chay cai nay
```javascript
ketqua.forEach((n,i)=>{$('.question-category').append(`<div>${i+1}:   ${n}</div>`)})
```