// 버튼이 눌렸을 때, 이벤트가 작동되도록 이벤트리스너를 넣어준 코드입니다.
document.getElementById('generateButton').addEventListener('click', function() {
    let numbers = generateLottoNumbers();  // 버튼이 눌리면 이 함수가 실행이 될 거에요.
    document.getElementById('numbers').textContent = numbers.join(', ');
});


function generateLottoNumbers() {
	var lotto =[]; 
    while(lotto.length < 6) {
        var num = Math.floor(Math.random() * 45 + 1); 
        if(lotto.indexOf(num) == -1) {
            lotto.push(num);
        }
    }
    lotto.sort((a,b)=>a-b);
    return lotto;
}

