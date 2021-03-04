function start() {
    document.getElementById('btn').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    document.getElementById('reload').style.display = 'block';
    document.getElementById('turn').classList.remove('d-none');
    player_name();
}

function player_name() {
    Swal.mixin({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2']
    }).queue([{
            title: 'Player One',
            text: 'Enter the Name'
        }, {
            title: 'Player Two',
            text: 'Enter the Name'
        }

    ]).then((result) => {
        if (result.value) {
            document.getElementById('player_1').innerText = result.value[0];
            document.getElementById('player_2').innerText = result.value[1];
            Swal.fire({
                title: 'All the Best 👍',
                confirmButtonText: 'Start Game'
            })
        }
    })

}
var flag = 1;
var req = 0;
var scr_1 = 0;
var scr_2 = 0;

function display(value) {
    var id = value;
    if (flag == 1) {
        var a = value + "_content";
        document.getElementById(a).innerText = 'X';
        document.getElementById(id).style.opacity = '1';
        document.getElementById(id).value = 'X';
        document.getElementById(a).classList.remove("d-none");
        document.getElementById(id).style.display = 'none';
        document.getElementById(id).disabled = true;
        flag--;
        setTimeout(() => {
            winner();
        }, 250);
    } else if (flag == 0) {
        var b = value + "_content";
        document.getElementById(b).innerText = 'O';
        document.getElementById(b).classList.remove("d-none");
        document.getElementById(id).value = 'O';
        document.getElementById(id).style.display = 'none';
        document.getElementById(id).style.opacity = '1';
        document.getElementById(id).disabled = true;
        flag++;
        setTimeout(() => {
            winner();
        }, 250);
    } else {
        window.alert('Worng Input')
    }
}

function res_score(res_value) {
    if (res_value == 'X') {
        document.getElementById('score_1').innerText = ++scr_1;
        document.getElementById('score_2').innerText = scr_2;
        document.getElementById('score_1').style.display = 'block'
        document.getElementById('score_2').style.display = 'block'
    } else if (res_value == 'O') {
        document.getElementById('score_1').innerText = scr_1;
        document.getElementById('score_2').innerText = ++scr_2;
        document.getElementById('score_1').style.display = 'block'
        document.getElementById('score_2').style.display = 'block'
    } else if (res_value == 'T') {
        document.getElementById('score_1').innerText = scr_1;
        document.getElementById('score_2').innerText = scr_2;
        document.getElementById('score_1').style.display = 'block'
        document.getElementById('score_2').style.display = 'block'
    }
}

function ann_res(winner) {
    if (winner == 'X') {
        var player = document.getElementById('player_1').innerText;
        Swal.fire('🏆 ' + player + ' Won 🏆')
        document.getElementById('cont').style.display = 'block';
        res_score('X');
    } else if (winner == 'O') {
        var player = document.getElementById('player_2').innerText;
        Swal.fire('🏆 ' + player + ' Won 🏆')
        document.getElementById('cont').style.display = 'block';
        res_score('O');
    } else if (winner == 'T') {
        Swal.fire('Match Tie')
        document.getElementById('cont').style.display = 'block';
        res_score('T');
    }

}

function winner() {
    // Setting DOM to all boxes or input field 
    var b1, b1, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;

    if (flag == 1) {
        document.getElementById('print')
            .innerHTML = document.getElementById('player_1').innerText + "'s Turn";
    } else if (flag == 0) {
        document.getElementById('print')
            .innerHTML = document.getElementById('player_2').innerText + "'s Turn";
    }
    // Checking if Player X won or not and after  
    // that disabled all the other fields 
    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
            b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        ann_res('X')
        document.getElementById('turn').classList.add('d-none');
    } else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
            b4 == 'X') && (b7 == 'x' || b7 == 'X')) {

        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        ann_res('X')
        document.getElementById('turn').classList.add('d-none');
    } else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
            b8 == 'X') && (b9 == 'x' || b9 == 'X')) {

        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        ann_res('X')
        document.getElementById('turn').classList.add('d-none');
    } else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
            b6 == 'X') && (b9 == 'x' || b9 == 'X')) {

        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        ann_res('X')
        document.getElementById('turn').classList.add('d-none');
    } else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
            b5 == 'X') && (b9 == 'x' || b9 == 'X')) {

        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        ann_res('X')
        document.getElementById('turn').classList.add('d-none');
    } else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
            b5 == 'X') && (b7 == 'x' || b7 == 'X')) {

        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        ann_res('X')
        document.getElementById('turn').classList.add('d-none');
    } else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
            b5 == 'X') && (b8 == 'x' || b8 == 'X')) {

        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
        ann_res('X')
        document.getElementById('turn').classList.add('d-none');
    } else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
            b5 == 'X') && (b6 == 'x' || b6 == 'X')) {

        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        ann_res('X')
        document.getElementById('turn').classList.add('d-none');
    }

    // Checking of Player X finsh 
    // Checking for Player 0 starts, Is player 0 won or 
    // not and after that disabled all the other fields 
    else if ((b1 == 'O' || b1 == 'O') && (b2 == 'O' ||
            b2 == 'O') && (b3 == 'O' || b3 == 'O')) {

        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        ann_res('O')
        document.getElementById('turn').classList.add('d-none');
    } else if ((b1 == 'O' || b1 == 'O') && (b4 == 'O' ||
            b4 == 'O') && (b7 == 'O' || b7 == 'O')) {

        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        ann_res('O')
        document.getElementById('turn').classList.add('d-none');
    } else if ((b7 == 'O' || b7 == 'O') && (b8 == 'O' ||
            b8 == 'O') && (b9 == 'O' || b9 == 'O')) {

        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        ann_res('O')
        document.getElementById('turn').classList.add('d-none');
    } else if ((b3 == 'O' || b3 == 'O') && (b6 == 'O' ||
            b6 == 'O') && (b9 == 'O' || b9 == 'O')) {

        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        ann_res('O')
        document.getElementById('turn').classList.add('d-none');
    } else if ((b1 == 'O' || b1 == 'O') && (b5 == 'O' ||
            b5 == 'O') && (b9 == 'O' || b9 == 'O')) {

        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        ann_res('O')
        document.getElementById('turn').classList.add('d-none');
    } else if ((b3 == 'O' || b3 == 'O') && (b5 == 'O' ||
            b5 == 'O') && (b7 == 'O' || b7 == 'O')) {

        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        ann_res('O')
        document.getElementById('turn').classList.add('d-none');
    } else if ((b2 == 'O' || b2 == 'O') && (b5 == 'O' ||
            b5 == 'O') && (b8 == 'O' || b8 == 'O')) {

        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
        ann_res('O')
        document.getElementById('turn').classList.add('d-none');
    } else if ((b4 == 'O' || b4 == 'O') && (b5 == 'O' ||
            b5 == 'O') && (b6 == 'O' || b6 == 'O')) {
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        ann_res('O')
        document.getElementById('turn').classList.add('d-none');
    } else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X' ||
            b2 == 'O') && (b3 == 'X' || b3 == 'O') &&
        (b4 == 'X' || b4 == 'O') && (b5 == 'X' ||
            b5 == 'O') && (b6 == 'X' || b6 == 'O') &&
        (b7 == 'X' || b7 == 'O') && (b8 == 'X' ||
            b8 == 'O') && (b9 == 'X' || b9 == 'O')) {
        ann_res('T')
        document.getElementById('turn').classList.add('d-none');
    }
}

function restart() {
    Swal.fire({
        title: 'Do you want to Restart',
        text: 'Currnet Results will be Lost ',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Yes`,
        denyButtonText: `No`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            window.location.reload();
        } else if (result.isDenied) {
            Swal.fire('Thank You', '', '')
        }
    })

}

function reset() {
    document.getElementById('b1').value = '';
    document.getElementById('b1').style.opacity = '0';
    document.getElementById('b1').disabled = false;
    document.getElementById('b1_content').innerText = '';
    document.getElementById('b1').style.display = 'block';
    document.getElementById('b2').value = '';
    document.getElementById('b2').style.opacity = '0';
    document.getElementById('b2').disabled = false;
    document.getElementById('b2_content').innerText = '';
    document.getElementById('b2').style.display = 'block';
    document.getElementById('b3').value = '';
    document.getElementById('b3').style.opacity = '0';
    document.getElementById('b3').disabled = false;
    document.getElementById('b3_content').innerText = '';
    document.getElementById('b3').style.display = 'block';
    document.getElementById('b4').value = '';
    document.getElementById('b4').style.opacity = '0';
    document.getElementById('b4').disabled = false;
    document.getElementById('b4_content').innerText = '';
    document.getElementById('b4').style.display = 'block';
    document.getElementById('b5').value = '';
    document.getElementById('b5').style.opacity = '0';
    document.getElementById('b5').disabled = false;
    document.getElementById('b5_content').innerText = '';
    document.getElementById('b5').style.display = 'block';
    document.getElementById('b6').value = '';
    document.getElementById('b6').style.opacity = '0';
    document.getElementById('b6').disabled = false;
    document.getElementById('b6_content').innerText = '';
    document.getElementById('b6').style.display = 'block';
    document.getElementById('b7').value = '';
    document.getElementById('b7').style.opacity = '0';
    document.getElementById('b7').disabled = false;
    document.getElementById('b7_content').innerText = '';
    document.getElementById('b7').style.display = 'block';
    document.getElementById('b8').value = '';
    document.getElementById('b8').style.opacity = '0';
    document.getElementById('b8').disabled = false;
    document.getElementById('b8_content').innerText = '';
    document.getElementById('b8').style.display = 'block';
    document.getElementById('b9').value = '';
    document.getElementById('b9').style.opacity = '0';
    document.getElementById('b9').disabled = false;
    document.getElementById('b9_content').innerText = '';
    document.getElementById('b9').style.display = 'block';
    document.getElementById('print').innerHTML = '';
    document.getElementById('turn').style.display = 'block';
    document.getElementById('turn').classList.remove('d-none');
    document.getElementById('cont').style.display = 'none';
    flag = 1;
}

function Cont_game() {
    console.log('kadhgakd')
    Swal.fire({
        title: 'Play Next Match',
        text: 'Continue Playing',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Yes`,
        denyButtonText: `No`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            reset();
        } else if (result.isDenied) {
            Swal.fire('Thank You', '', '')
        }
    })
}
