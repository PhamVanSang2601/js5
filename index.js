document.getElementById("submit").onclick = function (){
    const mark1 = document.getElementById("mark1").value;
    const mark2 = document.getElementById("mark2").value;
    const mark3 = document.getElementById("mark3").value;
    const districtEl = document.getElementById("district").value;
    const subjectEl = document.getElementById("subject").value;
    const resultEl = document.getElementById("result");
    let sum = Number(mark1) + Number(mark2) + Number(mark3);
    console.log("tổng điểm 3 môn:", sum);
    let mark;
    if(Number(mark1) && Number(mark2) && Number(mark3) > 0, districtEl === 'a') {
        if(subjectEl == 1){
            mark = sum + 2 + 2.5;
        } else if(subjectEl == 2){
            mark = sum + 2 + 1.5;
        } else if(subjectEl == 3){
            mark = sum + 2 + 1;
        } else{
            mark = sum + 2;
        }   
    } else if(Number(mark1) && Number(mark2) && Number(mark3) > 0, districtEl === 'b'){
        if(subjectEl == 1){
            mark = sum + 1 + 2.5;
        } else if(subjectEl == 2){
            mark = sum + 1 + 1.5;
        } else if(subjectEl == 3){
            mark = sum + 1 + 1;
        } else{
            mark = sum + 1;
        }   
    }else if(Number(mark1) && Number(mark2) && Number(mark3) > 0, districtEl === 'c'){
        if(subjectEl == 1){
            mark = sum + 0.5 + 2.5;
        } else if(subjectEl == 2){
            mark = sum + 0.5 + 1.5;
        } else if(subjectEl == 3){
            mark = sum + 0.5 + 1;
        } else{
            mark = sum + 0.5;
        }   
    }else if(Number(mark1) && Number(mark2) && Number(mark3) > 0, districtEl === 'x' ){
        if(subjectEl == 1){
            mark = sum + 2.5;
        } else if(subjectEl == 2){
            mark = sum + 1.5;
        } else if(subjectEl == 3){
            mark = sum + 1;
        } else{
            mark = sum;
        }   
    }
    else if (mark1 || mark2 || mark3 == 0){
        mark = 0;
    }
    console.log("điểm", mark);
    resultEl.innerHTML +=`<p>ĐIỂM CHUẨN: 12</p>`
    if(mark > 10 ){
        resultEl.innerHTML += `<p>KẾT QUẢ THI TUYỂN: ĐẬU - SỐ ĐIỂM ĐẠT ĐƯỢC: ${mark}</p>`
    } else{
        resultEl.innerHTML += `<p>KẾT QUẢ THI TUYỂN: RỚT - SỐ ĐIỂM ĐẠT ĐƯỢC: ${mark}</p>`
    }
    resultEl.style.display = "block";

}
