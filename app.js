const countDown = () =>{

    const countData = new Date("2024-03-12 00:00:00").getTime();
    
    const now = new Date().getTime();

    const dif = countData- now ;


    const s = 1000 ;
    const m = s * 60 ;
    const h = m * 60;
    const d = h *24 ;


    const day = Math.floor(dif/d);
    const hour  = Math.floor((dif% d )/ h );
    const minute  = Math.floor((dif% h )/ m);
    const second  = Math.floor((dif% m )/ s);

    console.log(hour);



    document.querySelector(".day").innerText = day ;
    document.querySelector(".hour").innerText = hour ;
    document.querySelector(".minute").innerText = minute ;
    document.querySelector(".second").innerText = second;

}


setInterval(countDown,1000);
