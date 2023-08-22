<main>

    <div class="main-headline">
        Opening dummy text to explain and sell the product
    </div>

    <a class="cta-btn" href="/quiz">
        Take the quiz now
    </a>

    <div class="fineprint">
        *some text to encourage the sale and say something smart
    </div>

</main>

<style>


main{
    background-color: rgb(29, 29, 29);
}

.main-headline{
    padding-top: 40px;
    padding-left: 20px;
    padding-bottom: 20px;
    width: 80vw;
        
    font-size: 50px;
    font-weight: 400;
        
    color:rgb(252, 248, 244);

    border-bottom: 1px solid rgb(60, 60, 60);
}

.cta-btn{
    display: inline-block;
    line-height: 45px;
    text-align: center;

    text-decoration: none;

    border: 1px solid rgb(60, 60, 60);
    background-color: #F6C90E;

    height: 45px;
    width: 240px;
    min-width: fit-content;

    margin-top: 80px;
    margin-left: calc(50% - 260px/2);
    padding: 10px;

    border-radius: 8px;

    cursor: pointer;
    font-weight: 400;
    font-size: 28px;
    color: rgb(29, 29, 29);

    font-family: 'Oswald';

    user-select: none;

    /*Glow effect*/
    -webkit-box-shadow:0px 0px 30px 4px rgba(255,238,46,0.33);
    -moz-box-shadow: 0px 0px 30px 4px rgba(255,238,46,0.33);
    box-shadow: 0px 0px 30px 4px rgba(255,238,46,0.33);
}

.cta-btn:hover{
    background-color: #fad12a;
}

.cta-btn:active, .cta-btn:focus{
    background-color: rgb(219, 182, 18);
    outline: none;
    box-shadow: none;
}

.fineprint{
    color: rgb(60, 60, 60);
    margin-left: 15vw;
    margin-right: 15vw;
    margin-top: 15px;
}

</style>
